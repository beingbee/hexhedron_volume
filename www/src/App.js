import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Row, Col, Alert, Button } from 'reactstrap';
import axios from 'axios';
import HexVol from './HexVol';

import './App.css';

import config from './config';

function App() {
  const [alert, setAlert] = useState();
  const [alertStyle, setAlertStyle] = useState('info');
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertDismissable, setAlertDismissable] = useState(false);
  const [idToken, setIdToken] = useState('');
  const [hexVolume, setHexVol] = useState('');

  useEffect(() => {
    getIdToken();
  }, [idToken]);

  axios.interceptors.response.use(response => {
    console.log('Response was received');
    return response;
  }, error => {
    window.location.href = config.redirect_url;
    return Promise.reject(error);
  });

  function onDismiss() {
    setAlertVisible(false);
  }

  function updateAlert({ alert, style, visible, dismissable }) {
    setAlert(alert ? alert : '');
    setAlertStyle(style ? style : 'info');
    setAlertVisible(visible);
    setAlertDismissable(dismissable ? dismissable : null);
  }

  const clearCredentials = () => {
    window.location.href = config.redirect_url;
  };

  const getIdToken = () => {
    const hash = window.location.hash.substr(1);
    const objects = hash.split("&");
    objects.forEach(object => {
      const keyVal = object.split("=");
      if (keyVal[0] === "id_token") {
        setIdToken(keyVal[1]);
      }
    });
  };

  const calcHexVol = async (event) => {
    const newVerticesInput = document.getElementById('newVertices');
    const item = newVerticesInput.value;
    
    console.log(item);
    
    if (!item || item === '') return;
    
    const newData = {
      "extent": item
    };

    const result = await axios({
      method: 'POST',
      url: `${config.api_base_url}/hex_volume/`,
      headers: {
        Authorization: idToken
      },
      data: newData
    });

    if (result && result.status === 401) {
      clearCredentials();
    } else if (result && result.status === 200) {
      if ( "volume" in result.data) {
        setHexVol( "Volume: " + result.data["volume"]); 
      } else {
        console.log("Error in server response:" + result.data);
        setHexVol("value error in calculating");
      }
    }
  };

  return (
    <div className="App">
      <Container>
        <Alert color={alertStyle} isOpen={alertVisible} toggle={alertDismissable ? onDismiss : null}>
          <p dangerouslySetInnerHTML={{ __html: alert }}></p>
        </Alert>
        <Jumbotron>
          <Row>
            <Col md="6" className="logo">
              <h1>Hexhedron Volumne Calculation</h1>
            </Col>
          </Row>  
          <Row>
            <Col md="6">
              {idToken.length > 0 ?
                (
                  <HexVol updateAlert={updateAlert} hexVolume={hexVolume} calcHexVol={calcHexVol}/>
                ) : (
                  <Button
                    href={`https://${config.cognito_hosted_domain}/login?response_type=token&client_id=${config.aws_user_pools_web_client_id}&redirect_uri=${config.redirect_url}`}
                    color="primary"
                    className="mt-5 float-center"
                  >
                    Log In
                  </Button>
                )
              }
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </div >
  );
}

export default App;

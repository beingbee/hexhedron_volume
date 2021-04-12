import React from 'react';
import { Button, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';

import './HexVol.css';

function HexVol({ hexVolume, calcHexVol }) {

  return (
    <div className="HexVol">
      <Form inline>
        <FormGroup>
          <Label for="newVertices">Input 2x4 Vertices List</Label>
          <Input type="text" name="newVertices" id="newVertices" placeholder="[[(0,0,0),(1,0,0),(0,1,0),(1,1,0)], [(0,0,1),(1,0,1),(0,1,1),(1,1,1)]]" />
        </FormGroup>
        <Button onClick={calcHexVol} color="primary" className="ml-1">Calculate</Button>
      </Form>
      <Row>
        <Col xs="12" className="mt-1 mb-1">
           {hexVolume}
        </Col>
      </Row>
    </div>
  );
}

export default HexVol;

// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "m8m5k2pbj4u167unih4cvliuj",     // CognitoClientID
  "api_base_url": "https://4w9sgmz4r6.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d3ru48f9kdzrjc.amplifyapp.com"                                      // AmplifyURL
};

export default config;

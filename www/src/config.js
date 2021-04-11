// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4selhoe9k14de4j5vosc3e3jbl",     // CognitoClientID
  "api_base_url": "",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d1tmumvptz3g4y.amplifyapp.com"                                      // AmplifyURL
};

export default config;

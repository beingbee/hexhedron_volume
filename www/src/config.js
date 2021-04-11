// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2knlucenanstemu0nqi9udj7vu",     // CognitoClientID
  "api_base_url": "https://5cyqbfhg86.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d27sj2dsge60p7.amplifyapp.com"                                      // AmplifyURL
};

export default config;

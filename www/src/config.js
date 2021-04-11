// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "15rt7j0cltglrq4u27lp4mf6qm",     // CognitoClientID
  "api_base_url": "",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d31f0llbvkl454.amplifyapp.com"                                      // AmplifyURL
};

export default config;

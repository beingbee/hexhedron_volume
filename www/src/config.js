// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "3ujk1cpbasu4r3j7m84lde0pmd",     // CognitoClientID
  "api_base_url": "https://30jtka7s7c.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d3g25scolw0z0a.amplifyapp.com"                                      // AmplifyURL
};

export default config;

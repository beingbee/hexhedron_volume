// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "58cp0h2jqv7dnr427p2r5o37pr",     // CognitoClientID
  "api_base_url": "https://8ii0f2hn13.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.dwd5pbyf3cvsq.amplifyapp.com"                                      // AmplifyURL
};

export default config;

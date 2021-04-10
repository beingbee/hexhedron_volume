// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4rjvs932p9o05g4os5cnft3gh8",     // CognitoClientID
  "api_base_url": "",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d2enz6aqt9ena3.amplifyapp.com"                                      // AmplifyURL
};

export default config;

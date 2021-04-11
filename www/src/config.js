// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "e218tru1uu6rmh87m56hhsntl",     // CognitoClientID
  "api_base_url": "https://w6b1v2q7d4.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d1xa4039ajk5rb.amplifyapp.com"                                      // AmplifyURL
};

export default config;

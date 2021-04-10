// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2iuc8nnib4edffoo54s1j59jj8",     // CognitoClientID
  "api_base_url": "https://7nsw3ag2r8.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-refarch.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d35c028vi2kgam.amplifyapp.com"                                      // AmplifyURL
};

export default config;

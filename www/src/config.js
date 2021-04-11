// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4v8lvmulhrs6n7dg1lsh2j2ra6",     // CognitoClientID
  "api_base_url": "https://7lkbmzrym5.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.dwdr0mafg1mzb.amplifyapp.com"                                      // AmplifyURL
};

export default config;

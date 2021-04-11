// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "39nksan48p7eaaegq3j0f39606",     // CognitoClientID
  "api_base_url": "https://kso0c2tgz4.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d25k3oz2spupxr.amplifyapp.com"                                      // AmplifyURL
};

export default config;

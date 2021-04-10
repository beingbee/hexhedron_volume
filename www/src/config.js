// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "7j3r6jge7r0tv3u4i701irdh5c",     // CognitoClientID
  "api_base_url": "",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.dqzle5ya63fzj.amplifyapp.com"                                      // AmplifyURL
};

export default config;

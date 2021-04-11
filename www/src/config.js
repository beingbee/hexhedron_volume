// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "5og6qoki6hs7kofmq9p1atjgnq",     // CognitoClientID
  "api_base_url": "https://y3cpf9one6.execute-api.ap-northeast-2.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "hexvolume-hexvol.auth.ap-northeast-2.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://main.d9vivlixwzxz1.amplifyapp.com"                                      // AmplifyURL
};

export default config;

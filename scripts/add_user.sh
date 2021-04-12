#!/usr/bin/bash -x

usage() {
    echo "$0 user_eamail_address"
    echo "    : Add cognito user with email address"  
}

[ $# -ne 1 ] && {
	usage
	exit 1 
}


USER_EMAIL=$1

USER_POOL_ID=$(aws cognito-idp list-user-pools --max-results 1 --query UserPools[0].Id --output text) || { echo "Erro!! Cannot find USER_POOL_ID"; exit 1; }

aws cognito-idp admin-create-user --user-pool-id $USER_POOL_ID --username $USER_EMAIL 

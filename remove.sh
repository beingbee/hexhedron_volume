#!/usr/bin/bash

[ -z "$STACK_NAME" ] &&  { echo "Please specify STACK_NAME environment variable"; exit 1; }
aws cloudformation delete-stack --stack-name $STACK_NAME 

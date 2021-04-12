

test_local_lambda: build_lambda
	./test_local_lambda.sh

build_lambda:
	sam build

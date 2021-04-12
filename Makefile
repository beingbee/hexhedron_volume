
deploy: deploy_frontend
	echo "deploy done"

deploy_frontend: deploy_backend
	./deploy_frontend.sh

deploy_backend:
	./deploy_backend.sh

test_local_lambda: build_lambda
	./test_local_lambda.sh

build: build_lambda build_frontend
	echo "build done"

build_lambda:
	sam build

build_frontend:
	cd www  && npm run build

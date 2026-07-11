@echo off

echo ===========================
echo Deploying Backend
echo ===========================

kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/backend-service.yaml

echo.

echo ===========================
echo Deploying Frontend
echo ===========================

kubectl apply -f kubernetes/frontend-deployment.yaml
kubectl apply -f kubernetes/frontend-service.yaml

echo.

echo ===========================
echo Deployment Finished
echo ===========================

kubectl get pods
kubectl get deployments
kubectl get services
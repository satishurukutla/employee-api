#!/bin/bash

echo "========================"
echo "Deploy Backend"
echo "========================"

kubectl apply -f kubernetes/backend-deployment.yaml
kubectl apply -f kubernetes/backend-service.yaml

echo ""

echo "========================"
echo "Deploy Frontend"
echo "========================"

kubectl apply -f kubernetes/frontend-deployment.yaml
kubectl apply -f kubernetes/frontend-service.yaml

echo ""

kubectl get pods
kubectl get services
kubectl get deployments
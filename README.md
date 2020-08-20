# Ho to run application 
1. kubectl create -f ./resource/service.yaml
1. kubectl get deployments
1. kubectl expose deployment nodeserver --type=LoadBalancer
1. minikube service nodeserver --url
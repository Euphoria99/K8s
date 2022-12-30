# Kubernetes Playground

## Minikube

1)To start

```
minikube start
```

- to setup a driver

```
minikube start --driver=hyperv
```

2)Dashboard

```
minikube dashboard
```

3)To stop

```
minikube stop

```

4)To Delete

```
minikube delete
```

## Kubectl Commands

List Everything

```
kubectl get all --all-namespaces
```

View the cluster and client configuration

```
kubectl config view
```

Deployments
Shortcode = deploy

List one or more deployments

```
kubectl get deployments
```

Display the detailed state of one or more deployments

```
kubectl describe deployment <deployment-name>
```

Edit and update the definition of one or more deployment on the server

```
kubectl edit deployment <deployment_name>
```

Create one a new deployment

```
kubectl create deployment <deployment_name>
```

Delete deployments

```
kubectl delete deployment <deployment_name>
```

See the rollout status of a deployment

```
kubectl rollout status deployment <deployment_name>
```

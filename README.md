# K8s

In this branch, we are deploying two pods with one container each, auth-api and users-api containers.The users api is dependent on auth-api and are connected via ClusterIP.This means only users-api can communicate with auth-api and no one else can.The users-api is exposed to user inorder to interact.

We have used CoreDNS to achieve this. name: AUTH_API_ADDRESSS value: 'auth-service.default:3000' is the environment variable we are using for this sole purpose.The value of the key is a stable ,never changing IP that acts as a DNS to commincate with auth-api


## Configuring kubeconfig file for an Amazon EKS cluster


1) First configure aws cli

```
aws configure
```

2) After the EKS cluster is in ready state, run this command 

```
aws eks update-kubeconfig --region <region-code> --name <cluster-name>
```
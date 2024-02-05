# K8s Flask

```sh
docker build -t hello-world-flask .
```

```sh
docker run -p 5000:5000 hello-world-flask
```

```sh
curl http://localhost:5000
```

```sh
docker login
```

```sh
docker tag hello-world-flask dmenezesgabriel/hello-world-flask
```

```sh
docker push dmenezesgabriel/hello-world-flask
```

```sh
minikube start
```

```sh
kubectl apply -f flask-deployment.yml
```

```sh
kubectl get deployments
```

```sh
kubectl get services
```

```sh
minikube service hello-world-flask-service
```

## Resources

- [kubernetes-nodeport-vs-loadbalancer-vs-ingress](https://medium.com/google-cloud/kubernetes-nodeport-vs-loadbalancer-vs-ingress-when-should-i-use-what-922f010849e0)

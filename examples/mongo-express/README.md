# K8s Mongo Express

## Requirements

- Docker
- Kubernetes
- Kubectl
- Minikube

## Usage

1. Start Minikube

   ```sh
   minikube start
   ```

2. Create a _namespace_:

   ```sh
   kubectl create ns mongo-express
   ```

3. Replace secrets in `app/express-secret.yml` and `database/mongo-secret.yml`, you can use
   `echo -n 'plain text' | base64` to generate a secret encrypted in base64.

4. Run minikube dashboard

   ```sh
   minikube dashboard
   ```

5. Start mongo secret

   ```sh
   kubectl apply -f database/mongo-secret.yml
   ```

6. Start mongo deplyment

   ```sh
   kubectl apply -f database/mongo-deployment.yml
   ```

7. Start mongo service

   ```sh
   kubectl apply -f database/mongo-service.yml
   ```

8. Start express secret

   ```sh
   kubectl apply -f app/express-secret.yml
   ```

9. Start express configmap

   ```sh
   kubectl apply -f app/express-configmap.yml
   ```

10. Start express deployment

    ```sh
    kubectl apply -f app/express-deployment.yml
    ```

11. Start express service

    ```sh
    kubectl apply -f app/express-service.yml
    ```

12. Assign a public IP to the express service

    ```sh
    minikube service mongo-express-service
    ```

13. Login with username and password you've inserted in the secrets at previous steps.

## TODO

- [] Use Statefulset for mongo database

## Resources

- [kubernetes-with-mongo-express-app](https://anuradha.hashnode.dev/kubernetes-with-mongo-express-app)

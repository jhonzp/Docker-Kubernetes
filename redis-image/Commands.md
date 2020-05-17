# Docker-Kubernetes
## Commands
### General
docker ps
docker image ls
docker container ls
docker containerid Stop
### Create Image and Run a Docker from it
Docker build .
Docker RUN ImageID
### TAG (version) build image
docker build -t Repository:TAG .
docker build -t jhonzp/redis:latest .
docker RUN jhonzp/redis
### Create same Imgage from container without use dockerfile
docker run -it alpine sh
/# apk --update redis
docker ps
docker commit -c 'CMD "redis-server"' DockerID
docker commit -c 'CMD "redis-server"' 2b879520a2f2


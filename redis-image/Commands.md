# Docker-Kubernetes
## Commands
### General
docker ps
docker image ls <br />
docker container ls <br />
docker containerid Stop
### Create Image and Run a Docker from it
Docker build . <br />
Docker RUN ImageID 
### TAG (version) build image
docker build -t Repository:TAG . <br />
docker build -t jhonzp/redis:latest . <br />
docker run jhonzp/redis 
### Create same Imgage from container without use dockerfile
docker run -it alpine sh <br />
/# apk --update redis <br />
docker ps <br />
docker commit -c 'CMD "redis-server"' DockerID <br />
docker commit -c 'CMD "redis-server"' 2b879520a2f2 <br />


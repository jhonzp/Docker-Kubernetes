# Docker-Kubernetes
## Commands
### General
docker ps <br />
docker image ls <br />
docker container ls  <br />
docker containerid Stop
### Create Image  from dockerfile and Run a Docker from it
Docker build .  <br />
docker run ImageID 
### TAG (version) build image
docker build -t Repository:TAG . <br />
docker build -t jhonzp/redis:latest . <br />
docker RUN jhonzp/redis
### Create Imgage from docker
docker run -it alpine sh <br />
/# apk --update redis <br />
docker ps <br />
docker commit -c 'CMD "redis-server"' DockerID <br />
docker commit -c 'CMD "redis-server"' 2b879520a2f2
### Create node app image using docker file.
cd simplewebNode <br />
docker build . -t jhonzp/simplewebnode .  <br />
docker run jhonzp/simplewebnode
### Run Docker for enable inside port
docker run -p localport:containerport jhonzp/simplewebnode <br />
docker run -p 8080:8080 jhonzp/simplewebnode
### Run command inside of Docker
docker ps <br />
docker exec -it dockerid command <br />
docker exec -it 01dfd6892b21 sh
## docker compose 
### similar to docker run
docker-compose up
### similar to docker build, rebuild docker and upgrade the servicess
docker-compose up --build
### similar to docker run, does free console
docker-compose up -d
### stop and remove all resource running
docker-compose down
### list of status ofservices running in docker compose
docker-compose ps


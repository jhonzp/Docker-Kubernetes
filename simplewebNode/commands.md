## Commands
### Create node app image using docker file.
docker build . -t jhonzp/simplewebnode .  <br />
docker run jhonzp/simplewebnode
### Run Docker for enable inside port
docker run -p localport:containerport jhonzp/simplewebnode
docker run -p 8080:8080 jhonzp/simplewebnode
docker run -p 5000:8080 jhonzp/simplewebnode
### Run command inside of Docker
docker ps
docker exec -it dockerid command
docker exec -it dockerid sh
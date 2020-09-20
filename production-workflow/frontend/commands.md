## Commands
### Create react app and deploy it in docker
docker build -f Dockerfile.dev -t jhonzp/reactfrontend .  <br />
docker run jhonzp/reactfrontend <br />
docker run -it -p 3000:3000 jhonzp/reactfrontend <br />
### Present wonrking directory
pwd
### map volumes from Local computer to container.
docker run -it -p 3000:3000 -v /app/node_modules -v ${pwd}:/app jhonzp/reactfrontend


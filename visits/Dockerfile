# Specify a base image
FROM node:alpine

# It set folder where files will be copied.
WORKDIR /usr/app

# Intall some dependencies
## Copy first package.json for avoid unnecessary rebuilds 
## (npm install only is executed when package file is changed)
COPY ./package.json ./
RUN npm install
## Copy all files
COPY ./ ./

# Default command
CMD ["npm","start"]



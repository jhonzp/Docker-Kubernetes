# Specify a base image
FROM node:alpine

# It set folder where files will be copied.
WORKDIR /usr/app

# Intall some dependencies
COPY ./ ./
RUN npm install

# Default command
CMD ["npm","start"]



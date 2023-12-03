# this file needed when you using docker in your development process

FROM node:18.17.1-alpine3.18

WORKDIR /app

# Copy the dependencies file
COPY package*.json .

# Install dependencies
RUN npm install

# Copy the workspace files to the container
COPY . .

RUN npm run build

# Expose any necessary ports
EXPOSE 3000

# Run the command to start your application
CMD [ "node", "build" ]

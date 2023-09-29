FROM node:18

# create & set working directory
RUN mkdir -p /home/node/apollo-server-boilerplate
WORKDIR /home/node/apollo-server-boilerplate

# copy global package.json files
COPY --chown=node package*.json ./

# create & copy dist and package.json file of users
RUN mkdir -p apps/users/dist
COPY --chown=node ./apps/users/package.json ./apps/users/
COPY --chown=node ./apps/users/dist ./apps/users/dist

# install dependencies
RUN npm install -w users --include-workspace-root --ignore-scripts --omit=dev 

ENV HOST=0.0.0.0 PORT=80

EXPOSE ${PORT}
CMD [ "npm", "run", "-w", "users", "start" ]

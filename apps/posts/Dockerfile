FROM node:18

# create & set working directory
RUN mkdir -p /home/node/apollo-server-boilerplate
WORKDIR /home/node/apollo-server-boilerplate

# copy global package.json files
COPY --chown=node package*.json ./

# create & copy dist and package.json file of posts
RUN mkdir -p apps/posts/dist
COPY --chown=node ./apps/posts/package.json ./apps/posts/
COPY --chown=node ./apps/posts/dist ./apps/posts/dist

# create & copy dist and package.json file of shared-backend
RUN mkdir -p libs/shared-backend/dist
COPY --chown=node ./libs/shared-backend/package.json ./libs/shared-backend/
COPY --chown=node ./libs/shared-backend/dist ./libs/shared-backend/dist

# install dependencies
RUN npm install -w posts --include-workspace-root --ignore-scripts --omit=dev 

ENV HOST=0.0.0.0 PORT=80

EXPOSE ${PORT}
CMD [ "npm", "run", "-w", "posts", "start" ]

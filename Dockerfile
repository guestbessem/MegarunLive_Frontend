# Stage 1: Build the Angular application
FROM node:14 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install -f

COPY . .
RUN npm run build
# Check the output in the build stage
RUN ls -l /app/dist/angular-material-template

# Stage 2: Serve the application with Nginx
FROM nginx:1.21.1
COPY --from=build /app/dist/angular-material-template /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

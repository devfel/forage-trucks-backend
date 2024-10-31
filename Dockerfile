#./Dockerfile
# Use an official Node.js image as a base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy only package.json and package-lock.json initially to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on (replace 3000 if your app uses a different port)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
#ENTRYPOINT ["npm", "start"]
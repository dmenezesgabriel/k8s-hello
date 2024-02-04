# Use the official Node.js LTS image
FROM node:20-bookworm-slim

# Declaring env
ENV NODE_ENV development

# Set the working directory
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies
RUN npm install

# Expose the port on which the app will run
EXPOSE 8000


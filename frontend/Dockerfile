# Use the official Node.js LTS image
FROM node:20-bookworm-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the app will run
EXPOSE 8000

# Command to run the application
CMD ["npm", "run", "dev", "--host"]

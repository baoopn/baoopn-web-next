# Use Node.js 22 as the base image
FROM node:22

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE ${PORT}

# Set environment variables
ENV NODE_ENV=production
ENV PORT=${PORT}

# Start the Next.js server
CMD ["npm", "start"]

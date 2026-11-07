# Task 2 - Jenkins CI/CD Pipeline

## Project Overview
This project demonstrates a basic CI/CD pipeline using Jenkins and Docker with a Node.js application.

## Technologies Used
- Jenkins
- Docker
- Node.js
- Git and GitHub
- Kali Linux

## Project Structure
- app.js - Node.js application
- package.json - Project configuration
- test/app.test.js - Application test
- Dockerfile - Docker image configuration
- Jenkinsfile - Jenkins pipeline
- .gitignore - Ignored files

## Application Endpoints
- / - Displays the welcome message.
- /health - Returns application health status.

## Run Locally
    npm test
    npm start

## Run Using Docker
    docker build -t task2-jenkins-cicd:v1 .
    docker run -d --name task2-app -p 3000:3000 task2-jenkins-cicd:v1

## Jenkins Pipeline Stages
1. Checkout
2. Build
3. Test
4. Docker Build
5. Deploy
6. Verify Deployment

## Project Status
The application tests and Docker deployment were verified locally. The Jenkins pipeline is configured, but its full execution has not yet been verified.

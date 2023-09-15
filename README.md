# Project Name: zuri-backend-task-2

## Description
This is a sample README.md file for a Node.js Express API using Firebase for authentication and database operations.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
- Node.js and npm installed
- Firebase project with Admin SDK credentials

## Installation
To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/zuri-backend-task-2.git
   ```

2. Change directory to project folder:
    ```bash
    cd zuri-backend-task-2
    ```

3. Install Dependencies:
    ```bash
    npm install
    ```


## Configuration
# Firebase Configuration
1. Create a Firebase project on the Firebase Console (https://console.firebase.google.com/).

2. Obtain your Firebase Admin SDK credentials JSON file and place it in the project directory.


## Usage
You can run the API in development or production mode.

# Start the API (Development Mode)
    ```bash
    npm run dev
    ```

# Start the API (Production Mode)
    ```bash
    npm start
    ```

## API Endpoints
# POST /api
- Description: This endpoint is used to create a new person in the database.
- Request: Expects a JSON object in the request body containing person data.
- Response:
    - If the person is successfully created, it returns a JSON response with a success message and the ID of the newly created person.
    - If there is an error, it returns an error response with a message.

# GET /api
- Description: This endpoint retrieves information about a person based on their user ID.
- Request: Expects a query parameter user_id in the URL to specify which person to retrieve.
- Response:
    - If the person exists, it returns a JSON response with a success message and the person's data.
    - If the person doesn't exist, it returns a 404 error response with a message.
    - If the request is invalid, it returns a 400 error response.

# PUT /api
- Description: This endpoint is used to update the information of a person based on their user ID.
- Request: Expects a query parameter user_id in the URL to specify which person to update. The updated person data should be in the request body.
- Response:
    - If the person is successfully updated, it returns a JSON response with a success message.
    - If the person doesn't exist, it returns a 404 error response with a message.
    - If the request is invalid, it returns a 400 error response.

# PUT /api
- Description: This endpoint is used to delete a person based on their user ID.
- Request: Expects a query parameter user_id in the URL to specify which person to delete. The request body is not used.
- Response:
    - If the person is successfully deleted, it returns a JSON response with a success message.
    - If the person doesn't exist, it returns a 404 error response with a message.
    - If the request is invalid, it returns a 400 error response.
# API Documentation

Welcome to the API documentation for the "zuri-backend-task-2" project. This document provides information on how to use the API, including standard request/response formats, sample usage, limitations, and setup instructions.

## Table of Contents
- [Standard Request/Response Formats](#standard-requestresponse-formats)
- [Sample API Usage](#sample-api-usage)
- [Known Limitations](#known-limitations)

## Standard Request/Response Formats

### POST /api
**Request Format:**
```json
{
  "name": "John Doe",
  "email": "someone@example.com",
  "bio": "This is the bio of the person"
}
```

**Response Format:**
```json
{
  "type": "success",
  "message": "1" // ID of the newly created person
}
```


### GET /api
**Request Format:**
- Query Parameter: user_id (e.g., /api?user_id=1)

**Response Format (Success):**
```json
{
  "type": "success",
  "message": "Person retrieved successfully",
  "data": {
    "id": "1",
    "name": "John Doe",
    "email": "someone@example.com",
    "bio": "This is the bio of the person"
  }
}
```

**Response Format (Error - Person Not Found):**
```json
{
  "type": "error",
  "message": "Person does not exist"
}
```

**Response Format (Error - Invalid Request):**
```json
{
  "type": "error",
  "message": "Invalid Request"
}
```


### PUT /api
**Request Format:**
- Query Parameter: user_id (e.g., /api?user_id=1)

**Response Format (Success):**
```json
{
  "type": "success",
  "message": "Person updated Successfully",
}
```

**Response Format (Error - Person Not Found):**
```json
{
  "type": "error",
  "message": "Person does not exist"
}
```

**Response Format (Error - Invalid Request):**
```json
{
  "type": "error",
  "message": "Invalid Request"
}
```


### DELETE /api
**Request Format:**
- Query Parameter: user_id (e.g., /api?user_id=1)

**Response Format (Success):**
```json
{
  "type": "success",
  "message": "Person deleted Successfully",
}
```

**Response Format (Error - Person Not Found):**
```json
{
  "type": "error",
  "message": "Person does not exist"
}
```

**Response Format (Error - Invalid Request):**
```json
{
  "type": "error",
  "message": "Invalid Request"
}
```



## Sample API Usage
# Create a New Person
    ```http
    POST /api
    Content-Type: application/json

    {
    "name": "John Doe",
    "email": "someone@example.com",
    "bio": "This is the bio of the person"
    }
    ```

**Response (Success)**
    ```json
    {
        "type": "success",
        "message": "2"
    }
    ```

# Retrieve a Person
    ```http
    GET /api?user_id=2
    ```
**Response Success**
    ```json
    {
        "type": "success",
        "message": "Person retrieved successfully",
        "data": {
            "id": "2",
            "firstName": "Alice",
            "lastName": "Smith",
            "age": 25
        }
    }


## Known Limitations
- The API does not support authentication or authorization.


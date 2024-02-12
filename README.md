# MERN Todo App

## Overview
This is a simple Todo application built using the MERN stack. The MERN stack comprises MongoDB, Express.js, React.js, and Node.js, providing a robust foundation for building web applications.

## Features
- **CRUD Operations**: Users can perform Create, Read, Update, and Delete operations on todo items.
- **RESTful API**: The backend server provides a RESTful API for interacting with todo items.
- **Real-time Updates**: Real-time updates are implemented using WebSocket technology for seamless user experience.

## Technologies Used
- **MongoDB**: A NoSQL database used for storing todo items.
- **Express.js**: A web application framework for Node.js used for building the backend API.
- **React.js**: A JavaScript library for building user interfaces.
- **Node.js**: A JavaScript runtime environment used for server-side development.

## Getting Started
Follow the steps below to run the application locally:

1. **Clone Repository**: Clone this repository to your local machine.
    ```bash
    git clone <repository-url>
    ```

2. **Install Dependencies**: Navigate to the project directory and install dependencies for both the server and client.
    ```bash
    cd mern-todo-app
    npm install
    cd todo-ui
    npm install
    ```

3. **Set Environment Variables**: Set up environment variables, such as MongoDB connection URI and JWT secret, in the `.env` file located in the server directory.

4. **Run the Application**: Start the server and client applications.
    ```bash
    # Start the server
    npm start

    # Start the client (in a separate terminal window)
    cd todo-ui
    npm start
    ```

5. **Access the Application**: Once both the server and client are running, access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## API Endpoints
- **GET /api/todo**: Retrieve all todo items.
- **POST /api/todo**: Create a new todo item.
- **GET /api/todo/:id**: Retrieve a specific todo item by ID.
- **PUT /api/todo/:id**: Update a specific todo item by ID.
- **DELETE /api/todo/:id**: Delete a specific todo item by ID.

## Folder Structure

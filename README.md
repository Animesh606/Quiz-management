# Online Quiz Application

A RESTful API for an online quiz application that allows users to register, log in, take multiple-choice quizzes (MCQs), and view results. This application is built using Node.js, Express.js, and MongoDB.

## Features
- User registration and login with JWT-based authentication.
- Quiz creation, management, and retrieval.
- Quiz submission and result tracking for each user.
- Simple MCQ structure with four options and one correct answer per question.

## Requirements
Before you start, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (v4.x or later)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository
First, clone this repository to your local machine using Git.

```bash
git clone https://github.com/Animesh606/Quiz-management
cd Quiz-management
```
### 2. Install Dependencies
Navigate to the project directory and install all necessary dependencies.

```bash
npm install
```
### 3. Set Up Environment Variables
Create a .env file in the root of your project directory to configure the necessary environment variables. You can use the .env.example file as a reference.

```bash
touch .env
```
Here is an example .env file:

```bash
# .env file
MONGO_URI=mongodb://localhost:27017/quizapp
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
`MONGO_URI`: The MongoDB connection string. If you're running MongoDB locally, use mongodb://localhost:27017/quizapp.
`JWT_SECRET`: A secret key for signing JWT tokens.\
`PORT`: The port where the server will run (default is 5000).

### 4. Start MongoDB
Make sure MongoDB is running on your local machine or use a cloud-based MongoDB service (e.g., MongoDB Atlas).

To start MongoDB locally:

```bash
mongod
```
### 5. Run the Application
Now you can start the application.

```bash
npm start
```
The server should start on the port specified in the .env file (default is 5000). You can access the API at http://localhost:5000.

### 6. API Endpoints
The following endpoints are available:

#### User Authentication
- **Register**: POST `/api/auth/register`

    **Body**:  
    ```json
    {
        "name": "John Doe",
        "email": "john@example.com",
        "password": "password"
    }
    ```

    **Response**: A JWT token

- **Login**: POST `/api/auth/login`

    **Body**: 
    ```json
    {
        "email": "john@example.com",
        "password": "password"
    }
    ```

    **Response**: A JWT token

#### Quiz Management
- **Create Quiz**: POST `/api/quiz/create`

    Requires authentication (JWT token in `Authorization` header).
    
    Body:
    ```json
    {
        "title": "Math Quiz",
        "description": "A quiz on basic math concepts",
        "questions": [
            {
                "question": "What is 2+2?",
                "options": ["1", "2", "3", "4"],
                "correctAnswer": 3
            }
        ]
    }
    ```
- **Get All Quizze**s: GET `/api/quiz`

    No authentication required.
- **Get Quiz by ID**: GET `/api/quiz/:id`

    No authentication required.
- **Submit Quiz**: POST `/api/quiz/submit`

    Requires authentication.

    **Body**:
    ```json
    {
        "quizId": "60f5f9c5d7e3e63b38b9eabc",
        "answers": [0, 1, 2, 3]
    }
    ```

- **Get User Results**: GET `/api/quiz/result`
    
    Requires authentication.
    
    Retrieves all quiz results for the authenticated user.


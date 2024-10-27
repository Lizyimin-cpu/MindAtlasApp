# MindAtlas Project

This project consists of two main parts:
1. **Part 1 - MySQL Query Task**: A MySQL query demonstrating data retrieval based on a given data structure.
2. **Part 2 - PHP and UI Application**: A PHP and React-based web application that showcases user course enrolments.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Part 1 - MySQL Query Task](#part-1---mysql-query-task)
- [Part 2 - PHP and UI Application](#part-2---php-and-ui-application)
  - [Setup Instructions](#setup-instructions)
    - [1. Backend Setup](#1-backend-setup)
    - [2. Frontend Setup](#2-frontend-setup)
  - [Database Setup](#database-setup)
  - [API Endpoints](#api-endpoints)
- [License](#license)

## Project Overview
The MindAtlas Project demonstrates proficiency in MySQL query writing as well as full-stack web application development using PHP and React.

## Technologies Used
- **Backend:** PHP, MySQL
- **Frontend:** React, Material-UI
- **Version Control:** Git, GitHub

## Part 1 - MySQL Query Task

This part involves writing a MySQL query to retrieve user information (phone, email, position) from three tables (`User`, `UserFieldName`, `UserData`) based on a specific data structure.

## Part 2 - PHP and UI Application

This project is a simple web application that demonstrates user course enrolments. It is built using PHP for the backend and React for the frontend. The project includes functionalities to view user enrolments, and it allows easy setup of the backend and frontend components.

### Setup Instructions

#### 1. Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/Lizyimin-cpu/MindAtlasApp.git
    ```
2. Navigate to the project directory:
    ```bash
    cd MindAtlasApp
    ```
3. Ensure you have PHP and MySQL installed on your system.
4. Place the project files into your web server's root directory (e.g., `/usr/local/var/www` for macOS).
5. Start your web server (e.g., Apache):
    ```bash
    sudo apachectl start
    ```

#### 2. Frontend Setup
1. Navigate to the frontend project directory:
    ```bash
    cd mindatlas-frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the React development server:
    ```bash
    npm start
    ```

### Database Setup
1. Use the provided `database_setup.sql` file to initialize the database:
    ```bash
    mysql -u root -p < database_setup.sql
    ```
2. This script will:
   - Create the `MindAtlasCourses` database
   - Create `Users`, `Courses`, and `Enrolments` tables
   - Populate the tables with some initial data

### API Endpoints
- **GET `/api/enrolments`** - Retrieves all user enrolments with details.

#### Example Response:
```json
[
  {
    "FirstName": "John",
    "LastName": "Doe",
    "Description": "PHP Development",
    "CompletionStatus": "completed"
  },
  {
    "FirstName": "Jane",
    "LastName": "Smith",
    "Description": "React Basics",
    "CompletionStatus": "in progress"
  }
]
```
## License:
- **Part 2 has been fully integrated**: All the instructions and descriptions related to the PHP and UI application have been written clearly in markdown format, making it part of the unified `README.md` document.
- **Consistent formatting**: All instructions and command examples are consistently formatted, providing a clear and easy-to-follow setup guide.
- **Comprehensive**: The document now covers the complete details of both the MySQL query and the web application setup, leaving no room for confusion.








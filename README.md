# MindAtlas Project

This project consists of two main parts:
1. **Part 1 - MySQL Query Task**: A MySQL query demonstrating data retrieval based on a given data structure.
2. **Part 2 - PHP and UI Application**: A PHP and React-based web application that showcases user course enrolments.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Part 1 - MySQL Query Task](#part-1---mysql-query-task)
  - [SQL Query](#sql-query)
- [Part 2 - PHP and UI Application](#part-2---php-and-ui-application)
  - [Setup Instructions](#setup-instructions)
    - [1. Backend Setup](#1-backend-setup)
    - [2. Frontend Setup](#2-frontend-setup)
  - [Database Setup](#database-setup)
  - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
The MindAtlas Project demonstrates proficiency in MySQL query writing as well as full-stack web application development using PHP and React.

## Technologies Used
- **Backend:** PHP, MySQL
- **Frontend:** React, Material-UI
- **Version Control:** Git, GitHub

## Part 1 - MySQL Query Task

This part involves writing a MySQL query to retrieve user information (phone, email, position) from three tables (`User`, `UserFieldName`, `UserData`) based on a specific data structure.

### SQL Query
Below is the SQL query to achieve the expected result for the MySQL task:

```sql
SELECT 
    u.Username,
    MAX(CASE WHEN ufn.Field = 'Phone' THEN ud.Data END) AS Phone,
    MAX(CASE WHEN ufn.Field = 'Email' THEN ud.Data END) AS Email,
    MAX(CASE WHEN ufn.Field = 'Position' THEN ud.Data END) AS Position
FROM User u
JOIN UserData ud ON u.ID = ud.UserID
JOIN UserFieldName ufn ON ud.FieldID = ufn.ID
GROUP BY u.Username;

## Part 2 -  PHP and UI Application


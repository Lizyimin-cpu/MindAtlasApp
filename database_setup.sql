-- Create database
CREATE DATABASE IF NOT EXISTS MindAtlasCourses;
USE MindAtlasCourses;

-- Create Users table
CREATE TABLE IF NOT EXISTS Users (
    UserID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);

-- Create Courses table
CREATE TABLE IF NOT EXISTS Courses (
    CourseID INT PRIMARY KEY,
    Description VARCHAR(100)
);

-- Create Enrolments table
CREATE TABLE IF NOT EXISTS Enrolments (
    EnrolmentID INT PRIMARY KEY,
    UserID INT,
    CourseID INT,
    CompletionStatus ENUM('not started', 'in progress', 'completed'),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
);

-- Insert initial data into Users table
INSERT INTO Users (UserID, FirstName, LastName) VALUES
(1, 'John', 'Doe'),
(2, 'Jane', 'Smith'),
(3, 'Emily', 'Johnson');

-- Insert initial data into Courses table
INSERT INTO Courses (CourseID, Description) VALUES
(1, 'PHP Development'),
(2, 'React Basics'),
(3, 'MySQL Mastery');

-- Insert initial data into Enrolments table
INSERT INTO Enrolments (EnrolmentID, UserID, CourseID, CompletionStatus) VALUES
(1, 1, 1, 'completed'),
(2, 1, 2, 'in progress'),
(3, 2, 2, 'not started'),
(4, 2, 1, 'completed'),
(5, 3, 3, 'completed');


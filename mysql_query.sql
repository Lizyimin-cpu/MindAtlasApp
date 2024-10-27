-- Step 1: Create the database and table structure
CREATE DATABASE IF NOT EXISTS MindAtlasTest;
USE MindAtlasTest;

-- Create the User table
CREATE TABLE IF NOT EXISTS User (
    ID INT PRIMARY KEY,
    Username VARCHAR(50)
);

-- Create the UserFieldName table
CREATE TABLE IF NOT EXISTS UserFieldName (
    ID INT PRIMARY KEY,
    Field VARCHAR(50)
);

-- Create the UserData table
CREATE TABLE IF NOT EXISTS UserData (
    ID INT PRIMARY KEY,
    FieldID INT,
    Data VARCHAR(100),
    UserID INT,
    FOREIGN KEY (FieldID) REFERENCES UserFieldName(ID),
    FOREIGN KEY (UserID) REFERENCES User(ID)
);

-- Step 2: Insert initial data
INSERT INTO User (ID, Username) VALUES
(1, 'User1'), (2, 'User2'), (3, 'User3');

INSERT INTO UserFieldName (ID, Field) VALUES
(1, 'Phone'), (2, 'Email'), (3, 'Position');

INSERT INTO UserData (ID, FieldID, Data, UserID) VALUES
(1, 1, '1111111', 1), (2, 2, 'User1@gmail.com', 1),
(3, 1, '2222222', 2), (4, 2, 'User2@gmail.com', 2),
(5, 1, '3333333', 3), (6, 2, 'User3@gmail.com', 3),
(7, 3, 'Tester', 3);

-- Step 3: Write the query to get the expected result
SELECT 
    u.Username,
    MAX(CASE WHEN ufn.Field = 'Phone' THEN ud.Data END) AS Phone,
    MAX(CASE WHEN ufn.Field = 'Email' THEN ud.Data END) AS Email,
    MAX(CASE WHEN ufn.Field = 'Position' THEN ud.Data END) AS Position
FROM User u
JOIN UserData ud ON u.ID = ud.UserID
JOIN UserFieldName ufn ON ud.FieldID = ufn.ID
GROUP BY u.Username;

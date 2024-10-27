# MindAtlas Frontend

This is the React frontend application for the MindAtlas project. It connects to the PHP backend to display user enrolments in courses and provides an interface for users to view detailed information about their enrolment status.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)


## Project Overview
The frontend application is built using React and Material-UI. It communicates with the PHP backend via REST API to fetch and display data about users' course enrolments. The goal is to create a user-friendly interface where users can easily navigate and find information.

## Technologies Used
- **React**: JavaScript library for building user interfaces
- **Material-UI**: Component library for React
- **Axios**: For making HTTP requests
- **React Router**: For routing and navigation

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v12 or later)
- npm (Node Package Manager)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/Lizyimin-cpu/MindAtlasApp.git
    ```
2. Navigate to the frontend directory:
    ```bash
    cd MindAtlasApp/mindatlas-frontend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
5. The application will be accessible at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode. Open `http://localhost:3000` to view it in your browser.

### `npm run build`
Builds the app for production to the `build` folder. It bundles React in production mode and optimizes the build for better performance.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
Removes the single build dependency from the project, exposing the configuration files.

## Project Structure
```plaintext
mindatlas-frontend/
│
├── public/
│   ├── index.html         # Main HTML file
│   └── manifest.json
│
├── src/
│   ├── components/        # Reusable React components
│   │   ├── Enrolments.js  # Component to display user enrolments
│   │   └── ...            # Other components
│   │
│   ├── redux/             # State management with Redux
│   │   ├── store.js       # Store configuration
│   │   └── enrolmentsSlice.js # Redux slice for enrolment state
│   │
│   ├── App.js             # Main App component
│   ├── index.js           # Entry point for the React app
│   └── ...                # Other utility and config files
│
├── package.json           # Project dependencies and scripts
└── README.md              # Documentation file (this file)

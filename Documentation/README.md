
# The Bangkok Project

Comming Soon...


# Folder Setup
## Backend (```./backend```)

1. ```/config``` - Configuration Files
   - Configuration files: database connection, environment variables

2. ```/controllers``` - Request Handlers
   - Functions that process API requests

3. ```/middleware``` - Security & Validation
   - Authentication and Request validation

4. ```/models``` - Mongoose Schemas
   - MongoDB schema models

5. ```/routes``` - API Endpoints
   - Express Routes

6. ```/services``` - External Integrations
   - Handles 3rd party services

7. ```/utils``` - Helper Functions
   - Reusable Utility Functions

8.  ```server.js``` - Main Entry Point
   - Start the Express Server

<br>

## Backend (```./frontend```)
1. ```/public``` - Static Assets
   - Contains Static Files that won't be processed by Webpack/Vite
    1. ```/assets``` - Custom Static Files
        - Stores images, fonts, other assets

    2. ```/css``` - Style Files
        - Stores style files for the webpages

    3. ```manifest.json``` - PWA (Progressive Web App) Settings
        - Configuration for website to act like mobile app

    4. ```robots.txt``` - SEO Settings
        - Controls how search engines index our site


2.  ```/src``` - Request Handlers
    1. ```/components``` - UI Components
        - Reusable UI Components

    2. ```/context``` - Global State Management
        - React Context API for managing global state

    3. ```/hooks``` - Custom React Hooks
        - Reusable Functions that encapsulate logic for fetching data, managing state, or interacting with browser

    4. ```/pages``` - Page Views
        - Different React Pages

    5. ```/services``` - API Calls
        - Stores API Calls

    6. ```App.js``` - Main Application File
        - Overall Structure of the application
        - Main layout, routes, global providers
        - Every component in the app is rendered inside this file

    7. ```/services``` - Entry Point of React
        - The first file that runs when React App loads
        - It renders the ```<App/>``` component inside the HTML page

<br>

## Database (```./database```)
- Stores database migrations or seed scripts

<br>

## Documentation (```./Documentation```)
- Stores Documentation
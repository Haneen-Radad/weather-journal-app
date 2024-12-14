# Weather Journal App

## Overview
This is an asynchronous web application that uses the OpenWeatherMap API and user input to dynamically update the UI with weather data. Users can enter their ZIP code and their feelings to retrieve the weather and save their input for later display.

## Features
- Fetch real-time weather data using the OpenWeatherMap API.
- Allow users to input their feelings and ZIP code.
- Store weather data and user input on the server.
- Dynamically update the UI with the latest data.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Haneen-Radad/weather-journal-app
   ```
2. Navigate to the project directory:
   ```bash
   cd weather-journal-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

## Project Structure
```
weather-journal-app/
├── website/
│   ├── app.js          # Client-side JavaScript
│   ├── index.html      # Main HTML file
│   ├── style.css       # Styling
├── package.json        # Project metadata and dependencies
├── README.md           # Project documentation
└── server.js           # Express server setup
```

## Routes

### GET `/all`
Fetches all saved weather data and user inputs from the server.

### POST `/add`
Saves weather data and user inputs to the server.

## Technologies Used
- HTML, CSS, JavaScript
- Node.js, Express
- OpenWeatherMap API

---

**Happy Coding!**

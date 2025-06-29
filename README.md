# Dad-Jokes-Generator
A simple web application built with HTML, CSS, and JavaScript that fetches and displays random dad jokes using a public API. Users can click a button to generate a new joke, with a clean and responsive design for a fun, lighthearted experience.

# Overview

Dad Jokes Generator is a simple web application that fetches and displays random dad jokes using the API Ninjas Dad Jokes API. Built with HTML, CSS, and JavaScript, it features a clean, responsive design with a button to generate new jokes. When clicked, the app retrieves a joke and displays it, with loading states and error handling for a smooth user experience.

# Features

i. Fetches random dad jokes from a public API.

ii. Responsive design with a gradient background and centered layout.

iii. Interactive button with hover effects and loading states.

iv. Error handling for network issues or API failures.

v. Simple and intuitive user interface.

# Technologies Used

HTML: Structure of the web page.

CSS: Styling with a gradient background, custom fonts, and hover effects.

JavaScript: Handles API requests and dynamic content updates.

API Ninjas Dad Jokes API: Provides the random dad jokes.

# Setup Instructions
  
Clone the Repository:

git clone https://github.com/aliulmurtazaalvi/dad-jokes-generator.git
cd dad-jokes-generator

Obtain an API Key: Sign up at API Ninjas to get a free API key for the Dad Jokes API.

Replace the apiKey value in index.js with your own API key:

const apiKey = 'https://api.api-ninjas.com/v1/dadjokes?';

# Serve the Application:

Since this is a static web app, you can open index.html directly in a browser or use a local server like live-server:

i. npm install -g live-server

ii. live-server

Alternatively, host the files on a web server or GitHub Pages.



# File Structure:

dad-jokes-generator/

├── index.html    # Main HTML file

├── index.js      # JavaScript for API calls and DOM updates

└── style.css     # CSS for styling the app

# Usage

Open the application in a web browser.

Click the "Tell me a Joke" button to fetch and display a random dad joke.

While the joke is loading, the button is disabled, and the text changes to "Loading...".

If an error occurs (e.g., no internet), an error message is displayed.

# Styling

The app uses a gradient background (lightblue to lightpink) and a centered container with a semi-transparent white background.

The heading uses the Impact font with a green text shadow for a bold look.

The joke text is displayed prominently with a large font size.

The button has a hover effect with a subtle shadow and smooth transition.

# Error Handling

If the API request fails (e.g., due to network issues), the app displays: "Check your internet and try again!!!"

The button is re-enabled after an error, allowing the user to retry.

# Notes

Ensure you have an active internet connection to fetch jokes from the API.

The API key in index.js must be valid. Do not share your API key publicly.

The app is designed to work in modern browsers (Chrome, Firefox, Safari, etc.).

# Future Improvements

Add a feature to share jokes directly to social media.

Implement a "favorite jokes" section to save jokes locally.

Add animations for joke transitions.

Support fetching multiple jokes at once for a slideshow effect.

# License

This project is licensed under the MIT License.

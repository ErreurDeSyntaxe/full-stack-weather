# Weather App

A website to search for the weather in a city.

## About the Project

### Preview

<div align='center'>
    <img src='./README/project-preview.jpg'>
</div>

### Live

<a href='http://google.com/'>Google</a>

### Objective

The goal of the project is to learn API calls through the usage of async/await and promises.

### Assignment

[The Odin Project (Dec '24)](https://www.theodinproject.com/lessons/javascript-webpack)

### Notable Features

- Search for a city
- Display current weather
- Display upcoming weather

### Built With

<img src='./README/html5-logo.svg' style='width:40px; height: 40px' >
<img src='./README/css3-logo.svg' style='width:40px; height: 40px' >
<img src='./README/javascript-logo.svg' style='width:40px; height: 40px' >
<img src='./README/webpack-logo.svg' style='width:40px; height: 40px' >

## Development

### To Do

- [x] Rewrite the README
  - [x] Title
  - [x] Objective
  - [x] Project Statement
  - [x] Notable Features
- [x] Plan
  - [x] User stories
  - [x] Features
  - [x] Flowchart
  - [x] Architecture
  - [x] UI Design/Sketch
- [ ] Development
  - [x] Basic HTML
    - [x] Title
    - [x] Meta
    - [x] Rough Structure
    - [x] Favicons
  - [x] Webpack
    - [x] "npm init"
    - [x] "npm install --save-dev webpack webpack-cli"
    - [x] "npm install --save-dev html-webpack-plugin"
    - [x] Remove script tag
    - [x] "npm install --save-dev style-loader css-loader"
    - [x] Import the CSS file into a JS file
    - [x] "npm install --save-dev html-loader"
    - [x] Follow the steps in "img.js"
    - [x] "npm install --save-dev webpack-dev-server"
    - [x] "npx webpack serve"
    - [x] Kill the server with ^C
  - [x] Console-Based Logic
    - [x] Get User Location
    - [x] Get Weather At Location
    - [x] Log Weather At Noon For 3 Days (今, 明, 後天)
    - [x] Get User Input
  - [ ] Fix bugs
    - [x] If City Not Found
    - [ ] If Input Is Empty
  - [ ] UI
    - [x] Refined UI
    - [x] Overall Layout
    - [x] Individual Section Layout
    - [ ] Spinner
  - [ ] Check Accessibility
  - [ ] Optimization
    - [x] Images
    - [ ] Lighthouse
- [ ] Deployment
  - [ ] Change "development" to "production" in webpack.config.js (undo if need)
  - [ ] "git branch gh-pages" (one time only)
  - [ ] Commit everything (redo each time)
  - [ ] "git checkout gh-pages && git merge main --no-edit" (redo each time)
  - [ ] "npx webpack" (redo)
  - [ ] 'git add dist -f && git commit -m "Deployment commit"' (redo)
  - [ ] "git subtree push --prefix dist origin gh-pages" (redo)
  - [ ] "git checkout main" (redo)
- [ ] Review README
  - [ ] Live Page Link
  - [ ] Built With
  - [ ] Reflection

### User Stories

- As a user, I want to know the weather forecast for my location (by default)
- As a user, I want to search for a city at any time
- As a user, I want to know the weather of a city
- As a user, I want to see a loading event when waiting for the information

### Features

Search bar
Loading wheel
Current weather
Five-day forecast

### Flowchart

Page Loads -> Request user location -> Fetch weather information
-> Display loading wheel -> Display information

User Searches -> Fetch -> Display loading wheel -> Display information

### Architecture

model.js
export const state = {
-location
-weather info
}

controller.js
getLocation()
addHandlers()

view.js
render(state)
addHandlerSpinner(handler)
addHandlerReceiveInput(handler)
export default new View();

## Reflection

### Lessons & Difficulties

Some lessons learned along the way

### Diary

The goal of the project is to practice API calls and promises. I will use async/await because it seems cleaner than other options. The website will not be super stylish, but it will not be pure HTML either.

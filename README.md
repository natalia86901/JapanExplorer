
Japan Explorer is a responsive, multi-screen React application

Live Demo (https://japanexplorer2025.netlify.app/)

Features and technologies used.

NavBar
React Router to handle the routing between application's pages
Destinations/Home
Weather
Food
Entertainment
Hamburger menu for responsive design

 
Destinaion sliders/Home page
UseState hook to display cities and manage Show More/Show Less states
Map() method to render images' slides
Ternary operator (? :) - to handle Show More/Show Less buttons
Substring() method to shorten description string

Weather page
UseEffect hook to call OpenWeather API
UseState to display and manage API fetch
Props to display api response objects from WeatherData.jsx file
Input to search for a city
Clicking on Search button triggers search
Pressing on Enter key triggers search
Alert() for handling empty and improper inputs

Food page
useState hook – to store food items and selected filters
filter() method – to filter items by food category 
map() method – to display each element

Entertainment page
useState hook – to manage the array of places to visit
map() method – to displayy each element 
Array functionality - remove a specific item, clear entire list
filter() method - to remove a specific item from array, filter by id
Modal UI  - display when the "Remove All" button is clicked. 








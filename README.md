# Film World React Native Application
It is essentially an application used for searching movies and viewing their details.

## Features
* The application opens with a list screen containing movies.
* Users can search for movies by name on this page, and the search process is optimized.
* A search is not performed for every character entered.
* A progress bar is displayed on the screen while the list is loading.
* Infinite scroll and pull-to-refresh features are used.
* Performance optimizations were made on the list screens.
* When a list item is clicked, the movie details are displayed on a new page.
* Movie details are stored locally using a preferred method, ensuring that the same movie details are not requested from the REST API again.

## Project Folder Hierarchy

│ 
└── src
  ├── components        // reusable components
  ├── config            // api and keys
  ├── navigation        // navigation configuration for pages
  ├── screens           // screens to be showed by react-navigation
  ├── styles            // style parameters and definitions used throughout the project 

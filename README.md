# SWAPI App
This is a simple app where a user can select and search through Star Wars data using React and open source Start Wars API.

#
Try the app here - [SWAPI App](     )

# Application 
<p align="center"><img src="https://user-images.githubusercontent.com/80366503/196071175-3d0ec79d-5cb1-45e4-ae8c-f5626a7f0549.gif" width="60%" ></p>

# Summary
This is my lates version of this application. The first version was utilizing table presentation of only star wars characters in a simple table listing of all the characters. In this version a user can choose between several categories and from there he/she can select every individual name for more details. Search form is available in each category and it will only take in elements of that category. 

# Tech notes
Updating this ap gave me an opportunity to practice new version of React Routed Dome (v6)) and get better at using react hooks. It was fun learning experience.

- **React-router-dom** {BrowserRouter, NavLink, Route, Routes, Outlet} - handles all of the routing of the application. I was able to use nested routing for each         category  for faster page loading, since SWAPI can take some time to load. This way, switching between categories will not cause a component to unmount, since         everything is loaded/fetched inside the parent component. The request for details will not initiate any further fetching either. As you click through names and         details, browser URL will reflect those nested routes with matching id's.

   - <ins>useLocation hook</ins> : It was my first interaction with useLocation and its properties. In particular, property "pathname". I found many useful instances   for this  property  throughout my application.
   - <ins>useParams hook</ins> : As you click through names and details, browser's URL will reflect those nested routes with matching id's. For this, I utilized hook's                                 "id" property.

- **React hooks**:
    - <ins>useState</ins> : This is one of my go-to hooks for dealing with component data.
    - <ins>useEffect</ins> : Every time there is a need for initial load on change or for a "hard stop" of rendering, this is my favorite hook.
    - <ins>createRef</ins> : In working with search form I was exploring the utilities of useRef hook and felt pretty comfortable in using its very handy property.                                  Previously I was using useRef hook and now finally I understand the difference between the two.

- **Axios** library - is used for API fetching and was available in "helper" folder as exported function. I was trying to separate front and back end functionality.

- **React-bootstrap** - is used for some styling. Most of the styling is done with CSS and its flex property.

# About Me
Goran Cvetic - Software Developer - [LinkedIn](https://www.linkedin.com/in/goran-cvetic-9aaa4288/) 

# Elephants

<img  width="300" src="https://github.com/amandapalma/elephants/blob/master/src/assets/elephant.png?raw=true">

**Elephants** is a small tribute to these pachyderms in the form of a **SPA web**, which contains a list of [real](https://en.wikipedia.org/wiki/List_of_individual_elephants) elephants throughout history with some descriptive data about each one, some luckier than others.

They are the largest land mammal in the world and are also known to be extremely intelligent. They are often associated with good memory, and several studies confirm this. They are docile and strong animals that have inhabited the earth for about eight million years; each culture has been linked to them in a different way: they became gods, slaves, prized objects and even raw material.

Today there are only two species of elephants left in the world, the Asian elephant and the African elephant, the latter being the largest land animal in the world. Unfortunately, the greatest threat to African elephants is poaching that fuels the illegal ivory trade, and for Asian elephants, the loss of habitat and the resulting human-elephant conflict that this generates.

## Stack

The application has been built with **[React]**(https://reactjs.org/) and **[Typescript]**(https://www.typescriptlang.org/), using **[118next]**(https://react.i18next.com/) framework for internationalization, offering a Spanish and English version app.

To send requests to REST endpoints, we have used **[Axios]**(https://github.com/axios/axios), a JavaScript library that can be executed in the browser and that allows us to make simple operations as an HTTP client.

Navigation has been implemented using **[React Router]**(https://reactrouter.com/web/guides/quick-start) library, and **[Jest]**(https://jestjs.io/) and Enzyme for testing.

**[Styled Components]**(https://styled-components.com/), a CSS-in-JS styling framework that uses tagged template literals in JavaScript and CSS, and **[Material UI]**(https://material-ui.com/), a UI framework for React based on Material Design, have been used to style the components.

## Install

Install **Node Package Manager** dependencies

    npm install

**React Router**

    npm install react-router-dom

**Axios**

    npm install axios

**Jest**

    npm install --save-dev jest

**I18Next**

    npm install react-i18next i18next

**Material UI**

    npm install @material-ui/core

**Material Design Icons**

    npm install @mdi/react @mdi/js

**Styled Components**

    npm install --save styled-components

## Available Scripts

In the project directory, you can run:

**start**

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits and you will also see any lint errors in the console.

    npm start

**test**

Launches the test runner in the interactive watch mode.

    npm test

**build**

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

    npm build

# Elephants

<img width="300" src="https://github.com/amandapalma/elephants/blob/master/src/assets/elephant.png?raw=true">

**Demo:** https://amandapalma.github.io/elephants/

Elephants is a small tribute to these pachyderms in the form of a single-page web app. It shows a list of [real elephants](https://en.wikipedia.org/wiki/List_of_individual_elephants) throughout history, with descriptive data about each one, some luckier than others.

## Features

- Home page and list of elephants.
- Detail view for each elephant (species, sex, birth, death, notes and a link to Wikipedia).
- Spanish and English versions.

## About elephants

They are the largest land mammal in the world and are also known to be extremely intelligent. They have strong social bonds and a remarkable memory: studies of elephant herds suggest that matriarchs remember water sources and other elephants for decades. The elephant family has lived on Earth for millions of years, and each culture has linked them to humans in a different way: they became gods, slaves, prized objects and even raw material.

Today there are three living species of elephants: the African savanna elephant, the African forest elephant and the Asian elephant. According to the IUCN, the main threat to African elephants has been poaching for the illegal ivory trade, while for Asian elephants it is the loss of habitat and the resulting human-elephant conflict.

## Stack

- [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- [i18next](https://react.i18next.com/) for internationalization
- [Axios](https://github.com/axios/axios) to request the data from the API
- [React Router](https://reactrouter.com/web/guides/quick-start) for navigation
- [Styled Components](https://styled-components.com/) and [Material UI](https://material-ui.com/) for styling
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) set up for testing

## Data

> [!WARNING]
> 🚧 **Under construction.** The public API this app used stopped working, so the data is being migrated to a static JSON API of my own, [elephants-api](https://github.com/amandapalma/elephants-api), published with GitHub Pages. Until the migration is finished, the elephants list and the detail view may not load correctly in the demo.

## Getting started

Install the dependencies and start the app:

```
npm install
npm start
```

Open http://localhost:3000 to view it in the browser. The page reloads when you edit the code.

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Runs the app in development mode. |
| `npm test` | Launches the test runner in watch mode. |
| `npm run build` | Builds the app for production in the `build` folder. |
| `npm run docs` | Builds the app and moves it to the `docs` folder, which GitHub Pages serves. |

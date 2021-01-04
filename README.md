# StanReactCodingExercise
A coding exercise for SPA in reactjs

## How to use

> Download or clone this repo by using below command

```js
git clone https://github.com/aashitk/StanReactCodingExercise.git
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Technical approach

> Route based SPA

#### App JS
```js
function App() {
  return (
    <AppContainer>
      <AppRouter />
    </AppContainer>
  );
}
```

#### App Router
Uses 'react-router-dom' to switch routes
```js
// example
<Switch>
    <Route exact path="/">
        /**<RoutingComponent />*/
    </Route>
</Switch>
```

## Improvements

> Changes for future enhancements

1. Can provide transitions and placeholders for images while loading.
2. Provide infinite scrolling or pagination.
3. Error page for failed routes.

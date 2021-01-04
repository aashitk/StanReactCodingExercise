# StanReactCodingExercise
This is a coding exercise for SPA in reactjs.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run on local

```js
git clone https://github.com/aashitk/StanReactCodingExercise.git
```
```js
npm i - to install dependencies
```
```js
npm run start
```
App is running on [http://localhost:3000](http://localhost:3000).

## For Production build

```js
npm run build
```
You can find output files in `/dist` folder.

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

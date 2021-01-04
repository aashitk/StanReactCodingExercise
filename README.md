# StanReactCodingExercise
A coding exercise for SPA in reactjs

## How to use

> Download or clone this repo by using below command

```js
git clone https://github.com/aashitk/StanReactCodingExercise.git
```

> Hosting

Use "http-server" to host prod build locally or npm to run local server

#### http-server
```js
refer https://www.npmjs.com/package/http-server
```

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

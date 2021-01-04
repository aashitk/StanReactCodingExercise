import './App.css';
import './styles.css';
import AppContainer from './components/app-container/app-container.component';
import AppRouter from './routers/app-router';

function App() {
  return (
    <AppContainer>
      {/* <div className="App-header">
      </div> */}
      <AppRouter />
    </AppContainer>
  );
}

export default App;

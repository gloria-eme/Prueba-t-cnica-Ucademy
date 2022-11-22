import './App.css';
import { Outlet } from 'react-router-dom';
import { MyContextProvider } from './context/MyContext';
import Home from './routs/home';

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <Outlet>
          <Home />
        </Outlet>
      </MyContextProvider>
    </div>
  );
}

export default App;

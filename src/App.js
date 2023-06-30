import './App.css';
import HomePage from './pages/HomePage';
import {Routes , Route} from 'react-router-dom'
// import Login from './pages/Login';

function App() {
  return (
    <div >
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
    </Routes>
    </div>
  );
}

export default App;

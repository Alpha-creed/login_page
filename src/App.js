import { useSelector } from 'react-redux';
import './App.css';
import LoginPage from './Components/LoginPage';
import Logout from './Components/Logout';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {
        user ? <Logout/>:
        <LoginPage/>
      }
    </div>
  );
}



export default App;

import './App.css';
import MainMenu from './Components/Main menu/MainMenu';
import axios from "axios";
function App() {
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.withCredentials=true;
  return (
    <div className="App">
      <MainMenu/>
    </div>
  );
}

export default App;

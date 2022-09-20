import { Route, Routes,} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Messages from './pages/Messages'
import Cours from './pages/Cours';
import Challenges from './pages/Challenges';
import Outils from './pages/Outils';
import Conseil from './pages/Conseil';
import Setting from './pages/Setting';
import Profil from './pages/Profil';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/message" element={<Messages/>} />
        <Route path="/cours" element={<Cours/>} />
        <Route path="/challenges" element={<Challenges/>} />
        <Route path="/outils" element={<Outils/>} />
        <Route path="/conseil" element={<Conseil/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/profil" element={<Profil/>} />
      </Routes>
    </div>
    
  );
}

export default App;

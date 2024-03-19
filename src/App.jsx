import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import WeatherApp from './Components/Weather/WeatherApp'
import Geography from './pages/Geography';
import Location from './pages/Location';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

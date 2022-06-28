import { Routes, Route } from 'react-router-dom';
import Carousels from './features/carousels/Carousels';
import Header from './components/Header';
import AdvicePage from './pages/AdvicePage'
import FitnessPage from './pages/FitnessPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='advice' element={<AdvicePage />} />
        <Route path='fitness' element={<FitnessPage />} />

      </Routes>
      <Carousels />
    </div>
  );
}

export default App;


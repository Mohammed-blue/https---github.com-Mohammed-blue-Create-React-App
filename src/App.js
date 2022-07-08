import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NutritionPage from './pages/NutritionPage'
import FitnessPage from './pages/FitnessPage'
import SelfCarePage from './pages/SelfCarePage'
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import SuccessPage from './pages/SuccessPage';
import BusinessPage from './pages/BusinessPage'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ShopPage from './pages/ShopPage';
import YogaPage from './pages/YogaPage';
import HiitPage from './pages/HiitPage';
import PilatesPage from './pages/PilatesPage';
import CardioPage from './pages/CardioPage';
import StrengthPage from './pages/StrengthPage';
import NoEquipmentsPage from './pages/NoEquipmentsPage';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='nutrition' element={<NutritionPage />} />
        <Route path='fitness' element={<FitnessPage />} />
        <Route path='self-care' element={<SelfCarePage />} />
        <Route path='success' element={<SuccessPage />} />
        <Route path='business' element={<BusinessPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='sign-up' element={<SignUpPage />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='Yoga' element={<YogaPage />} />
        {/* <Route path='HIIT' element={<ShopPage />} /> */}
        <Route path='HIIT' element={<HiitPage />} />
        <Route path='Pilates' element={<PilatesPage />} />
        <Route path='Cardio' element={<CardioPage />} />
        <Route path='Strength' element={<StrengthPage />} />
        <Route path='No-Equipments' element={<NoEquipmentsPage />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;


import './App.css';
import AboutApp from './components/about/AboutApp';
import AppFeature from './components/app_feature/AppFeature';
import CreativeTeam from './components/creative_team/CreativeTeam';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Store from './components/store/Store';

function App() {
  return (
   <div>
    <Header/>
    <Hero/>
    <AboutApp/>
    <AppFeature/>
    <CreativeTeam/>
    <Store/>
    <Footer/>
   </div>
  );
}

export default App;

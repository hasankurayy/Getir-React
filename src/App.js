import './App.css';
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Categories from "./components/Categories"
import Campaigns from "./components/Campaigns"
import Cards from "./components/Cards"
import Footer from "./components/Footer"

function App() {
    return (
        <>
            <Header/>
            <HeroSection />
            <Categories />
            <Campaigns />
            <Cards />
            <Footer />
        </>
  );
}

export default App;

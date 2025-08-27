import Header from './components/layouts/Header';
import Hero from './components/1_Hero';
import Portfolio from './components/2_Portfolio';
// import Partners from './components/3_Partners';
import CI from './components/4_CI';
import Contact from './components/5_Contact';
import Footer from './components/layouts/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portfolio />
      {/*<Partners />*/}
      <CI />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

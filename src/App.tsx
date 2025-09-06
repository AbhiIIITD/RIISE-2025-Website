import Header from './components/Header';
import Hero from './components/Hero';
import Showcases from './components/Showcases';
import About from './components/About';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';
import Registration from './components/Register';
// import EventSchedule from './components/Schedule.tsx';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      <NetworkBackground />
      <Header />
      <Hero />
      <About />
      <Showcases />
      {/* <EventSchedule /> */}
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
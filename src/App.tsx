import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Impact from './components/Impact';
import CampaignBanner from './components/CampaignBanner';
import Programs from './components/Programs';
import Stories from './components/Stories';
import GetInvolved from './components/GetInvolved';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Impact />
        <CampaignBanner />
        <Programs />
        <Stories />
        <GetInvolved />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import SocialLinks from './components/SocialLinks';
import CanvasBackground from './components/CanvasBackground';
import './App.css';
import cengSVG from './images/ceng.svg';

function App() {
  const [text, setText] = useState('');
  const fullText = "Web Developer & Software Engineer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [repos, setRepos] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ... existing code ...

  return (
    <>
      <div className="relative z-10 min-h-screen bg-gray-900">
        {!isMobile && <CanvasBackground />}
        <Navbar />
        {/* ... existing code ... */}
      </div>
    </>
  );
}

export default App; 
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { slides } from './Slides';
import Slide from './components/Slide';
import FinalSlide from './components/FinalSlide';
import Hearts from './components/Hearts';

function App() {
  const [index, setIndex] = useState(0);
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().catch(() => {});
    }
  }, []);



  return (
    <div className="container">
      <Hearts />
      <AnimatePresence mode="wait">
        {index < slides.length ? (
          <Slide key={index} data={slides[index]} onNext={() => setIndex(index + 1)} />
        ) : (
          <FinalSlide key="final" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

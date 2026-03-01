import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import InputForm from './components/InputForm';
import LoadingScreen from './components/LoadingScreen';
import ResultScreen from './components/ResultScreen';
import { calculateNumerology } from './utils/numerology';
import { fetchSajuAnalysis } from './services/gemini';
import './App.css';

function App() {
  const [stage, setStage] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return ['intro', 'input', 'result'].includes(hash) ? hash : 'intro';
  });
  const [userData, setUserData] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (['intro', 'input', 'result'].includes(hash)) {
        setStage(hash);
      } else if (!hash) {
        setStage('input'); // Default to input on back from input (since intro redirects to input)
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (stage !== 'loading') {
      if (window.location.hash !== `#${stage}` && stage !== 'intro') {
        window.history.pushState(null, '', `#${stage}`);
      }
    }
  }, [stage]);

  useEffect(() => {
    if (stage === 'intro') {
      const timer = setTimeout(() => {
        setStage('input');
      }, 3500); // Intro forced to ~3.5s
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleStartAnalysis = async (data) => {
    setUserData(data);
    setStage('loading');

    const startTime = Date.now();

    try {
      const numerology = calculateNumerology(data.name);
      const analysisResults = await fetchSajuAnalysis(data, numerology);

      const elapsedTime = Date.now() - startTime;
      const minLoadingTime = 6000; // Minimum 6s for loading screen
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setResults({
          ...analysisResults,
          numerology
        });
        setStage('result');
      }, remainingTime);
    } catch (error) {
      console.error("Analysis failed:", error);
      setStage('input');
      alert("Something went wrong with the cosmic connection. Please try again.");
    }
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {stage === 'intro' && (
          <IntroScreen key="intro" />
        )}
        {stage === 'input' && (
          <InputForm key="input" onStart={handleStartAnalysis} />
        )}
        {stage === 'loading' && (
          <LoadingScreen key="loading" />
        )}
        {stage === 'result' && results && (
          <ResultScreen key="result" results={results} userData={userData} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

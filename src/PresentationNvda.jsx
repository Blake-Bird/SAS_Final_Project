// PresentationNvda.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from './slides_nvda.jsx';
import './styles_nvda.css';

export default function PresentationNvda() {
  const [slideIndex, setSlideIndex] = useState(0); // 0-based
  const [step, setStep] = useState(0);             // per-slide step
  const [direction, setDirection] = useState('forward'); // 'forward' | 'backward'
  const containerRef = useRef(null);

  const currentSlide = slides[slideIndex];

  const goNext = useCallback(() => {
    if (step < currentSlide.maxStep) {
      setStep((s) => s + 1);
    } else if (slideIndex < slides.length - 1) {
      setDirection('forward');
      setSlideIndex((idx) => idx + 1);
      setStep(0);
    }
  }, [step, slideIndex, currentSlide.maxStep]);

  const goPrev = useCallback(() => {
    if (step > 0) {
      setStep((s) => s - 1);
    } else if (slideIndex > 0) {
      setDirection('backward');
      setSlideIndex((idx) => idx - 1);
      const prev = slides[slideIndex - 1];
      setStep(prev.maxStep);
    }
  }, [step, slideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  // Keep focus so keys always work
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [slideIndex]);

  const onBackgroundClick = (e) => {
    // Advance only when clicking on the main slide area
    if (e.target.closest('.slide-inner')) {
      goNext();
    }
  };

  const slideDirectionClass =
    direction === 'forward' ? 'slide-forward' : 'slide-backward';

  return (
    <div
      className="presentation-shell"
      tabIndex={-1}
      ref={containerRef}
      onClick={onBackgroundClick}
    >
      <div className="presentation-stage">
        <div className={`slide-frame ${slideDirectionClass}`}>
          <div key={currentSlide.id} className="slide-inner">
            {currentSlide.render(step)}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState, useRef } from 'react';
import { StarField } from './StarField';

const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showMantra, setShowMantra] = useState(false);
  const onCompleteRef = useRef(onComplete);
  const hasCompletedRef = useRef(false);

  // Keep ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMantra(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (!hasCompletedRef.current) {
            hasCompletedRef.current = true;
            setTimeout(() => onCompleteRef.current(), 500);
          }
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background noise-overlay">
      <StarField starCount={150} />
      
      {/* Rotating Zodiac Wheel */}
      <div className="relative mb-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-primary/30 animate-rotate-slow flex items-center justify-center">
          {zodiacSymbols.map((symbol, i) => {
            const angle = (i * 30) - 90;
            const radius = 80;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;
            
            return (
              <span
                key={i}
                className="absolute text-xl md:text-2xl text-primary/70 zodiac-glow"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {symbol}
              </span>
            );
          })}
        </div>
        
        {/* Central Glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-glow" />
        </div>
      </div>

      {/* Sanskrit Mantra */}
      <div
        className={`mb-8 transition-all duration-1000 ${
          showMantra ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="font-heading text-lg md:text-xl text-primary/80 tracking-widest">
          ॐ नक्षत्राय नमः
        </p>
        <p className="text-sm text-muted-foreground mt-2 font-body">
          Aligning with the celestial wisdom...
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-64 md:w-80 h-1 bg-secondary/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary via-accent to-copper transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

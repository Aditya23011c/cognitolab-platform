'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Timer, Eye } from 'lucide-react';

export default function ExperimentRunnerPage() {
  const [started, setStarted] = useState(false);
  const [currentTrial, setCurrentTrial] = useState(0);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [stimulus, setStimulus] = useState('');
  const [stimulusStartTime, setStimulusStartTime] = useState<number | null>(null);

  const trials = [
    { text: 'RED', color: 'text-blue-600', correctColor: 'blue' },
    { text: 'BLUE', color: 'text-red-600', correctColor: 'red' },
    { text: 'GREEN', color: 'text-yellow-600', correctColor: 'yellow' },
    { text: 'YELLOW', color: 'text-green-600', correctColor: 'green' },
  ];

  useEffect(() => {
    if (started && currentTrial < trials.length) {
      const timer = setTimeout(() => {
        const trial = trials[currentTrial];
        setStimulus(trial.text);
        setStimulusStartTime(performance.now());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [started, currentTrial]);

  useEffect(() => {
    if (!stimulus) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (stimulusStartTime) {
        const rt = Math.round(performance.now() - stimulusStartTime);
        setReactionTime(rt);
        
        setTimeout(() => {
          setStimulus('');
          setReactionTime(null);
          setCurrentTrial(currentTrial + 1);
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [stimulus, stimulusStartTime, currentTrial]);

  if (!started) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center mx-auto mb-6">
            <Eye className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Stroop Effect Study</h1>
          <p className="text-lg text-muted-foreground mb-8">
            In this experiment, you will see words displayed in different colors. 
            Press the key corresponding to the COLOR of the text, not the word itself.
          </p>
          <div className="bg-muted p-6 rounded-xl mb-8">
            <h3 className="font-semibold mb-4">Instructions:</h3>
            <ul className="text-sm text-left space-y-2 max-w-md mx-auto">
              <li>• Words will appear in the center of the screen</li>
              <li>• Press the key matching the TEXT COLOR (not the word)</li>
              <li>• Respond as quickly and accurately as possible</li>
              <li>• Your reaction time will be measured in milliseconds</li>
            </ul>
          </div>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-lg px-12"
            onClick={() => setStarted(true)}
          >
            Begin Experiment
          </Button>
        </div>
      </div>
    );
  }

  if (currentTrial >= trials.length) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <Timer className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Experiment Complete!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thank you for participating. Your data has been recorded.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = '/participant'}
          >
            Return to Portal
          </Button>
        </div>
      </div>
    );
  }

  const trial = trials[currentTrial];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div className="text-sm text-white/60">
          Trial {currentTrial + 1} / {trials.length}
        </div>
        {reactionTime !== null && (
          <div className="text-sm font-mono text-green-400">
            {reactionTime}ms
          </div>
        )}
      </div>

      {/* Stimulus Area */}
      <div className="flex-1 flex items-center justify-center">
        {stimulus ? (
          <div className="text-center">
            <h2 className={`text-8xl font-bold ${trial.color} transition-all`}>
              {stimulus}
            </h2>
            {reactionTime !== null && (
              <p className="text-2xl text-white/60 mt-8 font-mono">
                Reaction Time: {reactionTime}ms
              </p>
            )}
          </div>
        ) : (
          <div className="text-6xl text-white/40">+</div>
        )}
      </div>

      {/* Bottom Instructions */}
      <div className="p-4 text-center text-sm text-white/40 border-t border-white/10">
        Press any key to respond to the color
      </div>
    </div>
  );
}
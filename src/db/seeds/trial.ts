import { db } from '@/db';
import { trial } from '@/db/schema';

async function main() {
    const trialTypes = [
        { type: 'stroop', weight: 0.4 },
        { type: 'reaction_time', weight: 0.25 },
        { type: 'visual', weight: 0.15 },
        { type: 'audio', weight: 0.1 },
        { type: 'memory', weight: 0.1 }
    ];

    const stroopStimuli = [
        { text: 'RED', color: 'blue', correct: 'blue' },
        { text: 'BLUE', color: 'red', correct: 'red' },
        { text: 'GREEN', color: 'yellow', correct: 'yellow' },
        { text: 'YELLOW', color: 'green', correct: 'green' },
        { text: 'RED', color: 'red', correct: 'red' },
        { text: 'BLUE', color: 'blue', correct: 'blue' }
    ];

    const reactionStimuli = ['PRESS_SPACE', 'PRESS_ENTER', 'PRESS_KEY'];
    const visualStimuli = ['LEFT_ARROW', 'RIGHT_ARROW', 'UP_ARROW', 'DOWN_ARROW'];
    const audioStimuli = ['TONE_440HZ', 'TONE_880HZ', 'TONE_1000HZ', 'BEEP_SHORT', 'BEEP_LONG'];
    const memoryWords = ['ELEPHANT', 'COMPUTER', 'MOUNTAIN', 'OCEAN', 'PIANO', 'GARDEN', 'ROCKET', 'CRYSTAL'];

    const performanceLevels = [
        { level: 'high', accuracy: [0.90, 0.95], weight: 0.4 },
        { level: 'average', accuracy: [0.75, 0.85], weight: 0.4 },
        { level: 'low', accuracy: [0.60, 0.75], weight: 0.2 }
    ];

    const reactionTimeBands = [
        { min: 200, max: 400, weight: 0.2 },
        { min: 400, max: 600, weight: 0.6 },
        { min: 600, max: 800, weight: 0.2 }
    ];

    function getRandomElement<T>(arr: T[]): T {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function getWeightedChoice<T extends { weight: number }>(items: T[]): T {
        const random = Math.random();
        let cumulative = 0;
        for (const item of items) {
            cumulative += item.weight;
            if (random <= cumulative) return item;
        }
        return items[items.length - 1];
    }

    function getReactionTime(): number {
        const band = getWeightedChoice(reactionTimeBands);
        return Math.floor(Math.random() * (band.max - band.min) + band.min);
    }

    function isAccurate(performanceLevel: { accuracy: [number, number] }): boolean {
        const [min, max] = performanceLevel.accuracy;
        const threshold = Math.random() * (max - min) + min;
        return Math.random() < threshold;
    }

    const sampleTrials = [];
    let trialId = 1;

    for (let sessionId = 1; sessionId <= 50; sessionId++) {
        const trialsInSession = Math.floor(Math.random() * 5) + 4;
        const sessionStartTime = new Date('2024-01-01');
        sessionStartTime.setDate(sessionStartTime.getDate() + (sessionId - 1));
        sessionStartTime.setHours(Math.floor(Math.random() * 12) + 8);
        
        let currentTime = new Date(sessionStartTime);
        const performanceLevel = getWeightedChoice(performanceLevels);

        for (let trialNum = 1; trialNum <= trialsInSession; trialNum++) {
            const trialType = getWeightedChoice(trialTypes);
            const reactionTime = getReactionTime();
            const accurate = isAccurate(performanceLevel);
            
            let stimulus: string;
            let response: string;
            let metadata: any;

            switch (trialType.type) {
                case 'stroop': {
                    const stroopData = getRandomElement(stroopStimuli);
                    stimulus = stroopData.text;
                    response = accurate ? stroopData.correct : getRandomElement(['red', 'blue', 'green', 'yellow']);
                    const isCongruent = stroopData.text.toLowerCase() === stroopData.color;
                    metadata = {
                        block_number: Math.floor((trialNum - 1) / 3) + 1,
                        condition: isCongruent ? 'congruent' : 'incongruent',
                        stimulus_duration: 1500,
                        text_color: stroopData.color,
                        word: stroopData.text
                    };
                    break;
                }
                case 'reaction_time': {
                    stimulus = getRandomElement(reactionStimuli);
                    response = accurate ? 'space' : (Math.random() > 0.5 ? 'enter' : 'missed');
                    metadata = {
                        block_number: Math.floor((trialNum - 1) / 3) + 1,
                        condition: 'standard',
                        stimulus_duration: 2000,
                        response_key: response
                    };
                    break;
                }
                case 'visual': {
                    stimulus = getRandomElement(visualStimuli);
                    const correctDir = stimulus.includes('LEFT') ? 'left' : stimulus.includes('RIGHT') ? 'right' : stimulus.includes('UP') ? 'up' : 'down';
                    response = accurate ? correctDir : getRandomElement(['left', 'right', 'up', 'down']);
                    metadata = {
                        block_number: Math.floor((trialNum - 1) / 3) + 1,
                        condition: 'directional',
                        stimulus_duration: 1000,
                        direction: correctDir
                    };
                    break;
                }
                case 'audio': {
                    stimulus = getRandomElement(audioStimuli);
                    response = accurate ? 'heard' : 'not_heard';
                    metadata = {
                        block_number: Math.floor((trialNum - 1) / 3) + 1,
                        condition: 'auditory',
                        stimulus_duration: 500,
                        frequency: stimulus.includes('440') ? 440 : stimulus.includes('880') ? 880 : 1000,
                        volume: 70
                    };
                    break;
                }
                case 'memory': {
                    const word = getRandomElement(memoryWords);
                    stimulus = `WORD_${word}`;
                    response = accurate ? word.toLowerCase() : getRandomElement(memoryWords).toLowerCase();
                    metadata = {
                        block_number: Math.floor((trialNum - 1) / 3) + 1,
                        condition: 'recall',
                        stimulus_duration: 3000,
                        word: word,
                        delay_ms: 2000
                    };
                    break;
                }
                default:
                    stimulus = 'UNKNOWN';
                    response = 'none';
                    metadata = {};
            }

            sampleTrials.push({
                id: trialId++,
                sessionId: sessionId,
                trialType: trialType.type,
                trialNumber: trialNum,
                stimulus: stimulus,
                response: response,
                reactionTime: reactionTime,
                isCorrect: accurate,
                metadata: JSON.stringify(metadata),
                createdAt: currentTime.toISOString()
            });

            currentTime = new Date(currentTime.getTime() + (Math.random() * 3000 + 2000));
        }
    }

    await db.insert(trial).values(sampleTrials);
    
    console.log('✅ Trial seeder completed successfully - 250 trials generated across 50 sessions');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});
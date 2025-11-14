import { db } from '@/db';
import { experiment } from '@/db/schema';

async function main() {
    const sampleExperiments = [
        {
            name: 'Stroop Effect Study',
            researcherId: 1,
            status: 'active',
            description: 'Classic Stroop task measuring cognitive interference',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 10,
                        stimuli: ['red', 'blue', 'green', 'yellow'],
                        duration: 2000
                    },
                    {
                        id: 'test_congruent',
                        type: 'test',
                        trials: 40,
                        condition: 'congruent',
                        duration: 2000
                    },
                    {
                        id: 'test_incongruent',
                        type: 'test',
                        trials: 40,
                        condition: 'incongruent',
                        duration: 2000
                    }
                ],
                timeline: {
                    fixation: 500,
                    stimulus: 2000,
                    iti: 1000
                },
                responseOptions: ['red', 'blue', 'green', 'yellow']
            }),
            createdAt: new Date('2023-06-15').toISOString(),
            updatedAt: new Date('2024-01-10').toISOString(),
        },
        {
            name: 'Visual Attention Task',
            researcherId: 1,
            status: 'completed',
            description: 'Measuring selective attention using visual stimuli',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 15,
                        stimulusType: 'visual_search',
                        targetPresent: 0.5
                    },
                    {
                        id: 'test_set4',
                        type: 'test',
                        trials: 60,
                        setSize: 4,
                        targetPresent: 0.5
                    },
                    {
                        id: 'test_set8',
                        type: 'test',
                        trials: 60,
                        setSize: 8,
                        targetPresent: 0.5
                    }
                ],
                timeline: {
                    fixation: 1000,
                    stimulus: 3000,
                    feedback: 500,
                    iti: 800
                },
                responseOptions: ['present', 'absent']
            }),
            createdAt: new Date('2023-08-20').toISOString(),
            updatedAt: new Date('2023-12-15').toISOString(),
        },
        {
            name: 'Memory Recall Experiment',
            researcherId: 2,
            status: 'active',
            description: 'Testing short-term memory recall capabilities',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 8,
                        listLength: 5,
                        stimulusType: 'digits'
                    },
                    {
                        id: 'test_short',
                        type: 'test',
                        trials: 30,
                        listLength: 5,
                        delay: 2000
                    },
                    {
                        id: 'test_medium',
                        type: 'test',
                        trials: 30,
                        listLength: 7,
                        delay: 2000
                    },
                    {
                        id: 'test_long',
                        type: 'test',
                        trials: 30,
                        listLength: 9,
                        delay: 2000
                    }
                ],
                timeline: {
                    encoding: 1000,
                    delay: 2000,
                    recall: 5000,
                    iti: 1500
                },
                responseOptions: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            }),
            createdAt: new Date('2023-09-10').toISOString(),
            updatedAt: new Date('2024-01-25').toISOString(),
        },
        {
            name: 'Response Inhibition Test',
            researcherId: 2,
            status: 'active',
            description: 'Go/No-Go task measuring inhibitory control',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 20,
                        goTrials: 0.75,
                        noGoTrials: 0.25
                    },
                    {
                        id: 'test_block1',
                        type: 'test',
                        trials: 100,
                        goTrials: 0.75,
                        noGoTrials: 0.25,
                        stimulusDuration: 500
                    },
                    {
                        id: 'test_block2',
                        type: 'test',
                        trials: 100,
                        goTrials: 0.75,
                        noGoTrials: 0.25,
                        stimulusDuration: 500
                    }
                ],
                timeline: {
                    fixation: 400,
                    stimulus: 500,
                    maxResponseTime: 1000,
                    iti: 600
                },
                responseOptions: ['go', 'nogo']
            }),
            createdAt: new Date('2023-10-05').toISOString(),
            updatedAt: new Date('2024-02-01').toISOString(),
        },
        {
            name: 'Auditory Processing Study',
            researcherId: 3,
            status: 'draft',
            description: 'Examining auditory stimulus processing speeds',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 12,
                        stimulusType: 'tone',
                        frequencies: [250, 500, 1000, 2000]
                    },
                    {
                        id: 'test_pitch',
                        type: 'test',
                        trials: 80,
                        task: 'pitch_discrimination',
                        duration: 300
                    },
                    {
                        id: 'test_duration',
                        type: 'test',
                        trials: 80,
                        task: 'duration_discrimination',
                        duration: 300
                    }
                ],
                timeline: {
                    fixation: 500,
                    stimulus: 300,
                    responseWindow: 2000,
                    iti: 1000
                },
                responseOptions: ['same', 'different']
            }),
            createdAt: new Date('2023-11-12').toISOString(),
            updatedAt: new Date('2023-12-20').toISOString(),
        },
        {
            name: 'Spatial Working Memory',
            researcherId: 3,
            status: 'active',
            description: 'Testing spatial memory capacity and duration',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 10,
                        gridSize: 4,
                        locations: 3
                    },
                    {
                        id: 'test_load2',
                        type: 'test',
                        trials: 40,
                        gridSize: 4,
                        locations: 2,
                        delay: 3000
                    },
                    {
                        id: 'test_load4',
                        type: 'test',
                        trials: 40,
                        gridSize: 4,
                        locations: 4,
                        delay: 3000
                    },
                    {
                        id: 'test_load6',
                        type: 'test',
                        trials: 40,
                        gridSize: 4,
                        locations: 6,
                        delay: 3000
                    }
                ],
                timeline: {
                    encoding: 2000,
                    delay: 3000,
                    probe: 2000,
                    iti: 1200
                },
                responseOptions: ['match', 'nomatch']
            }),
            createdAt: new Date('2023-07-25').toISOString(),
            updatedAt: new Date('2024-01-30').toISOString(),
        },
        {
            name: 'Emotional Face Recognition',
            researcherId: 1,
            status: 'paused',
            description: 'Recognition of emotional expressions in facial stimuli',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 14,
                        emotions: ['happy', 'sad', 'angry', 'fearful', 'neutral'],
                        intensity: 1.0
                    },
                    {
                        id: 'test_full',
                        type: 'test',
                        trials: 100,
                        intensity: 1.0,
                        stimulusDuration: 2000
                    },
                    {
                        id: 'test_subtle',
                        type: 'test',
                        trials: 100,
                        intensity: 0.5,
                        stimulusDuration: 2000
                    }
                ],
                timeline: {
                    fixation: 500,
                    stimulus: 2000,
                    responseWindow: 3000,
                    iti: 800
                },
                responseOptions: ['happy', 'sad', 'angry', 'fearful', 'neutral']
            }),
            createdAt: new Date('2023-05-18').toISOString(),
            updatedAt: new Date('2023-11-08').toISOString(),
        },
        {
            name: 'Decision Making Under Uncertainty',
            researcherId: 2,
            status: 'completed',
            description: 'Probabilistic decision making task',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 16,
                        riskLevels: ['low', 'medium', 'high'],
                        feedback: true
                    },
                    {
                        id: 'test_gains',
                        type: 'test',
                        trials: 60,
                        condition: 'gains',
                        probabilities: [0.25, 0.5, 0.75],
                        feedback: true
                    },
                    {
                        id: 'test_losses',
                        type: 'test',
                        trials: 60,
                        condition: 'losses',
                        probabilities: [0.25, 0.5, 0.75],
                        feedback: true
                    }
                ],
                timeline: {
                    choice: 4000,
                    feedback: 1500,
                    iti: 1000
                },
                responseOptions: ['risky', 'safe']
            }),
            createdAt: new Date('2023-04-10').toISOString(),
            updatedAt: new Date('2023-10-22').toISOString(),
        },
        {
            name: 'Language Processing Speed',
            researcherId: 3,
            status: 'active',
            description: 'Measuring lexical decision reaction times',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice',
                        type: 'practice',
                        trials: 20,
                        stimulusType: 'words',
                        wordFrequency: 'mixed'
                    },
                    {
                        id: 'test_high_freq',
                        type: 'test',
                        trials: 80,
                        wordFrequency: 'high',
                        wordProportion: 0.5,
                        nonwordProportion: 0.5
                    },
                    {
                        id: 'test_low_freq',
                        type: 'test',
                        trials: 80,
                        wordFrequency: 'low',
                        wordProportion: 0.5,
                        nonwordProportion: 0.5
                    }
                ],
                timeline: {
                    fixation: 500,
                    stimulus: 2000,
                    maxResponseTime: 2000,
                    iti: 800
                },
                responseOptions: ['word', 'nonword']
            }),
            createdAt: new Date('2023-08-05').toISOString(),
            updatedAt: new Date('2024-02-05').toISOString(),
        },
        {
            name: 'Cognitive Load Assessment',
            researcherId: 1,
            status: 'draft',
            description: 'Dual-task paradigm for cognitive load measurement',
            configuration: JSON.stringify({
                blocks: [
                    {
                        id: 'practice_single',
                        type: 'practice',
                        trials: 10,
                        taskType: 'single',
                        primaryTask: 'digit_recall'
                    },
                    {
                        id: 'practice_dual',
                        type: 'practice',
                        trials: 10,
                        taskType: 'dual',
                        primaryTask: 'digit_recall',
                        secondaryTask: 'tone_detection'
                    },
                    {
                        id: 'test_low_load',
                        type: 'test',
                        trials: 40,
                        loadLevel: 'low',
                        digitSpan: 4
                    },
                    {
                        id: 'test_medium_load',
                        type: 'test',
                        trials: 40,
                        loadLevel: 'medium',
                        digitSpan: 6
                    },
                    {
                        id: 'test_high_load',
                        type: 'test',
                        trials: 40,
                        loadLevel: 'high',
                        digitSpan: 8
                    }
                ],
                timeline: {
                    encoding: 1500,
                    retention: 3000,
                    recall: 5000,
                    iti: 2000
                },
                responseOptions: ['correct', 'incorrect']
            }),
            createdAt: new Date('2023-12-01').toISOString(),
            updatedAt: new Date('2024-01-15').toISOString(),
        }
    ];

    await db.insert(experiment).values(sampleExperiments);
    
    console.log('✅ Experiments seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});
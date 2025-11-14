import { db } from '@/db';
import { participant } from '@/db/schema';

async function main() {
    const sampleParticipants = [
        // USA participants (22 records - 40%)
        { participantCode: 'P10001', age: 28, gender: 'female', country: 'USA', email: 'participant1@email.com', createdAt: new Date('2024-02-15').toISOString() },
        { participantCode: 'P10002', age: 45, gender: 'male', country: 'USA', email: 'participant2@email.com', createdAt: new Date('2024-03-10').toISOString() },
        { participantCode: 'P10003', age: 32, gender: 'non-binary', country: 'USA', email: null, createdAt: new Date('2024-01-20').toISOString() },
        { participantCode: 'P10004', age: 19, gender: 'female', country: 'USA', email: 'participant4@email.com', createdAt: new Date('2024-04-05').toISOString() },
        { participantCode: 'P10005', age: 52, gender: 'male', country: 'USA', email: 'participant5@email.com', createdAt: new Date('2024-05-12').toISOString() },
        { participantCode: 'P10006', age: 38, gender: 'prefer not to say', country: 'USA', email: null, createdAt: new Date('2024-02-28').toISOString() },
        { participantCode: 'P10007', age: 24, gender: 'female', country: 'USA', email: 'participant7@email.com', createdAt: new Date('2024-06-18').toISOString() },
        { participantCode: 'P10008', age: 61, gender: 'male', country: 'USA', email: 'participant8@email.com', createdAt: new Date('2024-07-22').toISOString() },
        { participantCode: 'P10009', age: 29, gender: 'non-binary', country: 'USA', email: 'participant9@email.com', createdAt: new Date('2024-03-30').toISOString() },
        { participantCode: 'P10010', age: 41, gender: 'female', country: 'USA', email: null, createdAt: new Date('2024-08-14').toISOString() },
        { participantCode: 'P10011', age: 33, gender: 'male', country: 'USA', email: 'participant11@email.com', createdAt: new Date('2024-04-25').toISOString() },
        { participantCode: 'P10012', age: 26, gender: 'prefer not to say', country: 'USA', email: 'participant12@email.com', createdAt: new Date('2024-09-08').toISOString() },
        { participantCode: 'P10013', age: 55, gender: 'female', country: 'USA', email: 'participant13@email.com', createdAt: new Date('2024-05-19').toISOString() },
        { participantCode: 'P10014', age: 22, gender: 'male', country: 'USA', email: null, createdAt: new Date('2024-10-03').toISOString() },
        { participantCode: 'P10015', age: 48, gender: 'non-binary', country: 'USA', email: 'participant15@email.com', createdAt: new Date('2024-06-27').toISOString() },
        { participantCode: 'P10016', age: 36, gender: 'female', country: 'USA', email: 'participant16@email.com', createdAt: new Date('2024-11-11').toISOString() },
        { participantCode: 'P10017', age: 58, gender: 'male', country: 'USA', email: 'participant17@email.com', createdAt: new Date('2024-07-15').toISOString() },
        { participantCode: 'P10018', age: 31, gender: 'prefer not to say', country: 'USA', email: null, createdAt: new Date('2024-08-29').toISOString() },
        { participantCode: 'P10019', age: 43, gender: 'female', country: 'USA', email: 'participant19@email.com', createdAt: new Date('2024-09-20').toISOString() },
        { participantCode: 'P10020', age: 27, gender: 'male', country: 'USA', email: 'participant20@email.com', createdAt: new Date('2024-10-25').toISOString() },
        { participantCode: 'P10021', age: 50, gender: 'non-binary', country: 'USA', email: 'participant21@email.com', createdAt: new Date('2024-11-30').toISOString() },
        { participantCode: 'P10022', age: 39, gender: 'female', country: 'USA', email: null, createdAt: new Date('2024-12-08').toISOString() },

        // UK participants (14 records - 25%)
        { participantCode: 'P10023', age: 35, gender: 'male', country: 'UK', email: 'participant23@email.com', createdAt: new Date('2024-01-18').toISOString() },
        { participantCode: 'P10024', age: 42, gender: 'female', country: 'UK', email: 'participant24@email.com', createdAt: new Date('2024-02-22').toISOString() },
        { participantCode: 'P10025', age: 29, gender: 'non-binary', country: 'UK', email: null, createdAt: new Date('2024-03-14').toISOString() },
        { participantCode: 'P10026', age: 53, gender: 'male', country: 'UK', email: 'participant26@email.com', createdAt: new Date('2024-04-19').toISOString() },
        { participantCode: 'P10027', age: 25, gender: 'prefer not to say', country: 'UK', email: 'participant27@email.com', createdAt: new Date('2024-05-23').toISOString() },
        { participantCode: 'P10028', age: 46, gender: 'female', country: 'UK', email: 'participant28@email.com', createdAt: new Date('2024-06-11').toISOString() },
        { participantCode: 'P10029', age: 34, gender: 'male', country: 'UK', email: null, createdAt: new Date('2024-07-08').toISOString() },
        { participantCode: 'P10030', age: 59, gender: 'non-binary', country: 'UK', email: 'participant30@email.com', createdAt: new Date('2024-08-02').toISOString() },
        { participantCode: 'P10031', age: 23, gender: 'female', country: 'UK', email: 'participant31@email.com', createdAt: new Date('2024-09-16').toISOString() },
        { participantCode: 'P10032', age: 40, gender: 'male', country: 'UK', email: 'participant32@email.com', createdAt: new Date('2024-10-12').toISOString() },
        { participantCode: 'P10033', age: 37, gender: 'prefer not to say', country: 'UK', email: null, createdAt: new Date('2024-11-05').toISOString() },
        { participantCode: 'P10034', age: 51, gender: 'female', country: 'UK', email: 'participant34@email.com', createdAt: new Date('2024-12-01').toISOString() },
        { participantCode: 'P10035', age: 30, gender: 'male', country: 'UK', email: 'participant35@email.com', createdAt: new Date('2024-01-25').toISOString() },
        { participantCode: 'P10036', age: 44, gender: 'non-binary', country: 'UK', email: 'participant36@email.com', createdAt: new Date('2024-02-17').toISOString() },

        // Canada participants (8 records - 15%)
        { participantCode: 'P10037', age: 28, gender: 'female', country: 'Canada', email: 'participant37@email.com', createdAt: new Date('2024-03-21').toISOString() },
        { participantCode: 'P10038', age: 49, gender: 'male', country: 'Canada', email: null, createdAt: new Date('2024-04-13').toISOString() },
        { participantCode: 'P10039', age: 32, gender: 'non-binary', country: 'Canada', email: 'participant39@email.com', createdAt: new Date('2024-05-07').toISOString() },
        { participantCode: 'P10040', age: 56, gender: 'prefer not to say', country: 'Canada', email: 'participant40@email.com', createdAt: new Date('2024-06-29').toISOString() },
        { participantCode: 'P10041', age: 21, gender: 'female', country: 'Canada', email: 'participant41@email.com', createdAt: new Date('2024-07-24').toISOString() },
        { participantCode: 'P10042', age: 47, gender: 'male', country: 'Canada', email: 'participant42@email.com', createdAt: new Date('2024-08-18').toISOString() },
        { participantCode: 'P10043', age: 33, gender: 'non-binary', country: 'Canada', email: null, createdAt: new Date('2024-09-11').toISOString() },
        { participantCode: 'P10044', age: 62, gender: 'female', country: 'Canada', email: 'participant44@email.com', createdAt: new Date('2024-10-19').toISOString() },

        // Australia participants (6 records - 10%)
        { participantCode: 'P10045', age: 26, gender: 'male', country: 'Australia', email: 'participant45@email.com', createdAt: new Date('2024-01-12').toISOString() },
        { participantCode: 'P10046', age: 38, gender: 'female', country: 'Australia', email: null, createdAt: new Date('2024-02-08').toISOString() },
        { participantCode: 'P10047', age: 54, gender: 'prefer not to say', country: 'Australia', email: 'participant47@email.com', createdAt: new Date('2024-03-26').toISOString() },
        { participantCode: 'P10048', age: 31, gender: 'non-binary', country: 'Australia', email: 'participant48@email.com', createdAt: new Date('2024-05-15').toISOString() },
        { participantCode: 'P10049', age: 45, gender: 'male', country: 'Australia', email: 'participant49@email.com', createdAt: new Date('2024-07-03').toISOString() },
        { participantCode: 'P10050', age: 20, gender: 'female', country: 'Australia', email: 'participant50@email.com', createdAt: new Date('2024-09-27').toISOString() },

        // Germany participants (3 records - 5%)
        { participantCode: 'P10051', age: 41, gender: 'male', country: 'Germany', email: 'participant51@email.com', createdAt: new Date('2024-04-09').toISOString() },
        { participantCode: 'P10052', age: 36, gender: 'female', country: 'Germany', email: null, createdAt: new Date('2024-06-21').toISOString() },
        { participantCode: 'P10053', age: 57, gender: 'non-binary', country: 'Germany', email: 'participant53@email.com', createdAt: new Date('2024-11-18').toISOString() },

        // Other countries (2 records - 5%)
        { participantCode: 'P10054', age: 35, gender: 'prefer not to say', country: 'France', email: 'participant54@email.com', createdAt: new Date('2024-08-06').toISOString() },
        { participantCode: 'P10055', age: 48, gender: 'male', country: 'Japan', email: null, createdAt: new Date('2024-12-14').toISOString() }
    ];

    await db.insert(participant).values(sampleParticipants);
    
    console.log('✅ Participants seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});
import { db } from '@/db';
import { researcher } from '@/db/schema';

async function main() {
    const sampleResearchers = [
        {
            name: 'Dr. Sarah Chen',
            email: 'sarah.chen@stanford.edu',
            institution: 'Stanford University',
            createdAt: new Date('2023-03-15').toISOString(),
        },
        {
            name: 'Dr. James Wilson',
            email: 'james.wilson@mit.edu',
            institution: 'MIT',
            createdAt: new Date('2023-08-22').toISOString(),
        },
        {
            name: 'Dr. Maria Rodriguez',
            email: 'maria.rodriguez@oxford.ac.uk',
            institution: 'Oxford University',
            createdAt: new Date('2024-01-10').toISOString(),
        }
    ];

    await db.insert(researcher).values(sampleResearchers);
    
    console.log('✅ Researcher seeder completed successfully');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});
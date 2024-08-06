import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  await prisma.team.createMany({
    data: [
      {
        id: uuidv4(),
        name: 'Lionel Messi',
        salary: 50000000,
        position: 'Forward',
        country: 'Argentina',
        createdAt: new Date('2024-01-01T00:00:00Z'),
      },
      {
        id: uuidv4(),
        name: 'Cristiano Ronaldo',
        salary: 45000000,
        position: 'Forward',
        country: 'Portugal',
        createdAt: new Date('2024-02-01T00:00:00Z'),
      },
      {
        id: uuidv4(),
        name: 'Neymar Jr',
        salary: 40000000,
        position: 'Forward',
        country: 'Brazil',
        createdAt: new Date('2024-03-01T00:00:00Z'),
      },
    ],
  });

  console.log('Players seeded successfully');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

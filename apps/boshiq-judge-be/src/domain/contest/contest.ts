import { Contest as PrismaContest } from '@prisma/client';
import { ContestDto } from '../../graphql/contest/contest.dto';

export class Contest {
  id: number;
  adminUserId: string;
  name: string;
  date: string | true;
  memo: string | null;

  constructor(init?: Partial<Contest>) {
    Object.assign(this, init);
  }
}

export function prismaToContest(prismaContest: PrismaContest): Contest {
  return new Contest({
    id: prismaContest.id,
    adminUserId: prismaContest.admin,
    name: prismaContest.name,
    date: prismaContest.date,
    memo: prismaContest.memo,
  });
}

export function contestToGraphQL(contest: Contest): ContestDto {
  return new ContestDto({
    id: contest.id,
    adminUserId: contest.adminUserId,
    name: contest.name,
    date: contest.date,
    memo: contest.memo,
  });
}

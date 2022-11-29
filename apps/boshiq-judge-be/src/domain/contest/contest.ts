import { Contest as PrismaContest } from '@prisma/client';
import { ContestDto } from '../../graphql/contest/contest.dto';

export class Contest {
  id: number;
  admin_user_id: string;
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
    admin_user_id: prismaContest.admin,
    name: prismaContest.name,
    date: prismaContest.date,
    memo: prismaContest.memo,
  });
}

export function contestToGraphQL(contest: Contest): ContestDto {
  return new ContestDto({
    id: contest.id,
    admin_user_id: contest.admin_user_id,
    name: contest.name,
    date: contest.date,
    memo: contest.memo,
  });
}

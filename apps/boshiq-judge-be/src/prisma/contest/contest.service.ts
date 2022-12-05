import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { Contest, prismaToContest } from '../../domain/contest/contest';

@Injectable()
export class ContestService {
  constructor(private prisma: PrismaService) {}

  async contest(contestId: number): Promise<Contest> {
    return this.prisma.contest
      .findUnique({
        where: { id: contestId },
      })
      .then((result) => {
        if (result === null) throw `ContestId ${contestId} Not Found`;
        return prismaToContest(result);
      });
  }

  async contests_by_admin(adminUserId: string): Promise<Contest[]> {
    return this.prisma.contest
      .findMany({
        where: {
          admin: {
            equals: adminUserId,
          },
        },
      })
      .then((result) => result.map(prismaToContest));
  }

  async createContest(data: Prisma.ContestCreateInput): Promise<Contest> {
    return this.prisma.contest
      .create({
        data,
      })
      .then(prismaToContest);
  }

  async deleteContest(contestId: number): Promise<Contest> {
    return this.prisma.contest
      .delete({
        where: {
          id: contestId,
        },
      })
      .then(prismaToContest);
  }
}

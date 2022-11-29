import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { Contest, prismaToContest } from '../../domain/contest/contest';

@Injectable()
export class ContestService {
  constructor(private prisma: PrismaService) {}

  async contest(
    contestWhereUniqueInput: Prisma.ContestWhereUniqueInput
  ): Promise<Contest | null> {
    return this.prisma.contest
      .findUnique({
        where: contestWhereUniqueInput,
      })
      .then(prismaToContest);
  }

  async contests_by_admin(admin_user_id: string): Promise<Contest[]> {
    return this.prisma.contest
      .findMany({
        where: {
          admin: {
            equals: admin_user_id,
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

  async deleteUser(where: Prisma.ContestWhereUniqueInput): Promise<Contest> {
    return this.prisma.contest
      .delete({
        where,
      })
      .then(prismaToContest);
  }
}

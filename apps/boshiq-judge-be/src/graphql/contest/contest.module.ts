import { Module } from '@nestjs/common';
import { ContestService } from '../../prisma/contest/contest.service';
import { PrismaService } from '../../prisma/prisma.service';

import { ContestResolver } from './contest.resolver';

@Module({
  providers: [ContestResolver, ContestService, PrismaService],
})
export class ContestModule {}

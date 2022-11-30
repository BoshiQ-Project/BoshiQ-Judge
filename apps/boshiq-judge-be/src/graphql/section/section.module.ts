import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

import { SectionResolver } from './section.resolver';
import { SectionService } from '../../prisma/section/section.service';

@Module({
  providers: [SectionResolver, SectionService, PrismaService],
})
export class SectionModule {}

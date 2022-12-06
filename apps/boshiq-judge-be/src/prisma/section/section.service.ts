import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { Section, prismaToSection } from '../../domain/section/section';

@Injectable()
export class SectionService {
  constructor(private prisma: PrismaService) {}

  async section(contestId: number, sectionNumber: number): Promise<Section> {
    return this.prisma.section
      .findUnique({
        where: {
          contestId_sectionNumber: {
            contestId,
            sectionNumber,
          },
        },
      })
      .then((result) => {
        if (result === null)
          throw `ContestId: ${contestId}SectionNumber ${sectionNumber} not found`;
        return prismaToSection(result);
      });
  }

  async sections_by_contest(contestId: number): Promise<Section[]> {
    return this.prisma.section
      .findMany({
        where: {
          contestId: {
            equals: contestId,
          },
        },
      })
      .then((result) => result.map(prismaToSection));
  }

  async createSection(data: Prisma.SectionCreateInput): Promise<Section> {
    return this.prisma.section
      .create({
        data,
      })
      .then(prismaToSection);
  }

  async deleteSection(
    contestId: number,
    sectionNumber: number
  ): Promise<Section> {
    return this.prisma.section
      .delete({
        where: {
          contestId_sectionNumber: {
            contestId,
            sectionNumber,
          },
        },
      })
      .then(prismaToSection);
  }
}

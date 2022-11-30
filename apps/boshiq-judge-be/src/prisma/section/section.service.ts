import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
import { Section, prismaToSection } from '../../domain/section/section';

@Injectable()
export class SectionService {
  constructor(private prisma: PrismaService) {}

  async section(sectionId: number): Promise<Section | null> {
    return this.prisma.section
      .findUnique({
        where: { id: sectionId },
      })
      .then(prismaToSection);
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

  async deleteSection(sectionId: number): Promise<Section> {
    return this.prisma.section
      .delete({
        where: {
          id: sectionId,
        },
      })
      .then(prismaToSection);
  }
}

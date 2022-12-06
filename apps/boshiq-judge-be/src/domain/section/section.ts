import { Section as PrismaSection } from '@prisma/client';
import { SectionDto } from '../../graphql/section/section.dto';

export class Section {
  sectionNumber: number;
  contestId: number;
  name: string;
  danceType: string;
  memo: string;

  constructor(init: Section) {
    this.sectionNumber = init.sectionNumber;
    this.contestId = init.contestId;
    this.name = init.name;
    this.danceType = init.danceType;
    this.memo = init.memo;
  }
}

export function prismaToSection(prismaSection: PrismaSection): Section {
  return new Section({
    sectionNumber: prismaSection.sectionNumber,
    contestId: prismaSection.contestId,
    name: prismaSection.name,
    danceType: prismaSection.danceType,
    memo: prismaSection.memo,
  });
}

export function sectionToGraphQL(section: Section): SectionDto {
  return new SectionDto({
    sectionNumber: section.sectionNumber,
    contestId: section.contestId,
    name: section.name,
    danceType: section.danceType,
    memo: section.memo,
  });
}

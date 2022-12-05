import { Section as PrismaSection } from '@prisma/client';
import { SectionDto } from '../../graphql/section/section.dto';

export class Section {
  id: number;
  contestId: number;
  name: string;
  danceType: string;
  memo: string;

  constructor(init: Section) {
    this.id = init.id;
    this.contestId = init.contestId;
    this.name = init.name;
    this.danceType = init.danceType;
    this.memo = init.memo;
  }
}

export function prismaToSection(prismaSection: PrismaSection): Section {
  return new Section({
    id: prismaSection.id,
    contestId: prismaSection.contestId,
    name: prismaSection.name,
    danceType: prismaSection.danceType,
    memo: prismaSection.memo,
  });
}

export function sectionToGraphQL(section: Section): SectionDto {
  return new SectionDto({
    id: section.id,
    contestId: section.contestId,
    name: section.name,
    danceType: section.danceType,
    memo: section.memo,
  });
}

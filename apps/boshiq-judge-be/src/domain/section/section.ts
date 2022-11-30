import { Section as PrismaSection } from '@prisma/client';
import { SectionDto } from '../../graphql/section/section.dto';

export class Section {
  id: number;
  contestId: number;
  name: string;
  danceType: string;
  memo: string;

  constructor(init?: Partial<Section>) {
    Object.assign(this, init);
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

import { Query, Resolver, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CreateSectionInput, SectionDto } from './section.dto';
import { SectionService } from '../../prisma/section/section.service';
import { sectionToGraphQL } from '../../domain/section/section';

@Resolver(() => SectionDto)
export class SectionResolver {
  constructor(private readonly sectionService: SectionService) {}

  @Query(() => [SectionDto], {
    description: 'コンテストの一覧を取得する',
  })
  async sections(
    @Args('contestId', { type: () => Int })
    contestId: number
  ): Promise<SectionDto[]> {
    return this.sectionService
      .sections_by_contest(contestId)
      .then((result) => result.map(sectionToGraphQL));
  }

  @Query(() => SectionDto, {
    description: 'コンテストを取得する',
  })
  async section(
    @Args('contestId', { type: () => Int })
    contestId: number,
    @Args('sectionNumber', { type: () => Int })
    sectionNumber: number
  ): Promise<SectionDto> {
    return this.sectionService
      .section(contestId, sectionNumber)
      .then(sectionToGraphQL);
  }

  @Mutation(() => SectionDto, { description: 'セクションを追加する' })
  async createSection(
    @Args('input', { type: () => CreateSectionInput }) input: CreateSectionInput
  ): Promise<SectionDto> {
    return await this.sectionService
      .createSection({
        contest: { connect: { id: input.contestId } },
        sectionNumber: input.sectionNumber,
        name: input.name,
        danceType: input.danceType,
        memo: input.memo,
      })
      .then(sectionToGraphQL);
  }
}

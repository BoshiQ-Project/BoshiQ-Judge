import { Query, Resolver, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { contestToGraphQL } from '../../domain/contest/contest';
import { ContestService } from '../../prisma/contest/contest.service';
import { ContestDto, CreateContestInput } from './contest.dto';

@Resolver(() => ContestDto)
export class ContestResolver {
  constructor(private readonly contestService: ContestService) {}

  @Query(() => [ContestDto], {
    description: 'コンテストの一覧を取得する',
  })
  async contests(
    @Args('userId', { type: () => String })
    userId: string
  ): Promise<ContestDto[]> {
    return this.contestService
      .contests_by_admin(userId)
      .then((result) => result.map(contestToGraphQL));
  }

  @Query(() => ContestDto, {
    description: 'コンテストを取得する',
  })
  async contest(
    @Args('contestId', { type: () => Int })
    contestId: number
  ): Promise<ContestDto> {
    return this.contestService.contest(contestId).then(contestToGraphQL);
  }

  @Mutation(() => ContestDto, { description: 'コンテストを追加する' })
  async createContest(
    @Args('input', { type: () => CreateContestInput }) input: CreateContestInput
  ): Promise<ContestDto> {
    return await this.contestService
      .createContest({
        admin: input.adminUserId,
        name: input.name,
        date: input.date,
        memo: input.memo,
      })
      .then(contestToGraphQL);
  }
}

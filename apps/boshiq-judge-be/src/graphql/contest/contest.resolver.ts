import { Query, Resolver, Mutation, Args, Int } from '@nestjs/graphql';
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
    @Args('user_id', { type: () => String })
    userId: string
  ): Promise<ContestDto[]> {
    return this.contestService
      .contests_by_admin(userId)
      .then((result) => result.map(contestToGraphQL));
  }

  @Mutation(() => ContestDto, { description: 'コンテストを追加する' })
  async createContest(
    @Args('input', { type: () => CreateContestInput }) input: CreateContestInput
  ): Promise<ContestDto> {
    return await this.contestService
      .createContest({
        admin: input.admin_user_id,
        name: input.name,
        date: input.date,
        memo: input.memo,
      })
      .then(contestToGraphQL);
  }
}

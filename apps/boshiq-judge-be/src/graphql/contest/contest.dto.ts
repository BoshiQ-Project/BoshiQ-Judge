import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '大会' })
export class ContestDto {
  @Field(() => ID, { description: '大会Id' })
  readonly id: number;

  @Field(() => String, { description: '管理者' })
  readonly admin_user_id: string;

  @Field(() => String, { description: '大会名' })
  readonly name: string;

  @Field(() => String, { description: '開催日(YYYY-MM-DD)', nullable: true })
  readonly date: string | true;

  @Field(() => String, { description: '備考', nullable: true })
  readonly memo: string | null;

  constructor(init?: Partial<ContestDto>) {
    Object.assign(this, init);
  }
}

@InputType('CreateContestInput')
export class CreateContestInput {
  @Field(() => String, { description: '管理者' })
  readonly admin_user_id: string;

  @Field(() => String, { description: '大会名' })
  readonly name: string;

  @Field(() => String, { description: '開催日(YYYY-MM-DD)', nullable: true })
  readonly date: string | null;

  @Field(() => String, { description: '備考', nullable: true })
  readonly memo: string | null;

  constructor(init?: Partial<ContestDto>) {
    Object.assign(this, init);
  }
}

import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '大会' })
export class ContestDto {
  @Field(() => Int, { description: '大会Id' })
  readonly id: number;

  @Field(() => String, { description: '管理者' })
  readonly adminUserId: string;

  @Field(() => String, { description: '大会名' })
  readonly name: string;

  @Field(() => String, { description: '開催日(YYYY-MM-DD)', nullable: true })
  readonly date: string | null;

  @Field(() => String, { description: '備考', nullable: true })
  readonly memo: string | null;

  constructor(init: ContestDto) {
    this.id = init.id;
    this.adminUserId = init.adminUserId;
    this.name = init.name;
    this.date = init.date;
    this.memo = init.memo;
  }
}

@InputType('CreateContestInput')
export class CreateContestInput {
  @Field(() => String, { description: '管理者' })
  readonly adminUserId: string;

  @Field(() => String, { description: '大会名' })
  readonly name: string;

  @Field(() => String, { description: '開催日(YYYY-MM-DD)', nullable: true })
  readonly date: string | null;

  @Field(() => String, { description: '備考', nullable: true })
  readonly memo: string | null;

  constructor(init: CreateContestInput) {
    this.adminUserId = init?.adminUserId;
    this.name = init?.name;
    this.date = init?.date;
    this.memo = init?.memo;
  }
}

import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'セクション' })
export class SectionDto {
  @Field(() => Int, { description: 'セクションID' })
  readonly id: number;

  @Field(() => Int, { description: '大会ID' })
  readonly contestId: number;

  @Field(() => String, { description: 'セクション名' })
  readonly name: string;

  @Field(() => String, { description: 'ダンス種目' })
  readonly danceType: string;

  @Field(() => String, { description: '備考' })
  readonly memo: string;

  constructor(init?: Partial<SectionDto>) {
    Object.assign(this, init);
  }
}

@InputType('CreateSectionInput')
export class CreateSectionInput {
  @Field(() => Int, { description: '大会ID' })
  readonly contestId: number;

  @Field(() => String, { description: 'セクション名' })
  readonly name: string;

  @Field(() => String, { description: 'ダンス種目' })
  readonly danceType: string;

  @Field(() => String, { description: '備考' })
  readonly memo: string;

  constructor(init?: Partial<CreateSectionInput>) {
    Object.assign(this, init);
  }
}

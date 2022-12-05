import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';

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

  constructor(init: SectionDto) {
    this.id = init.id;
    this.contestId = init.contestId;
    this.name = init.name;
    this.danceType = init.danceType;
    this.memo = init.memo;
  }
}

@InputType('CreateSectionInput')
export class CreateSectionInput {
  @Field(() => Int, { description: '大会ID' })
  readonly contestId: number;

  @Field(() => String, { description: 'セクション名' })
  readonly name: string;

  @Field(() => DanceType, { description: 'ダンス種目' })
  readonly danceType: DanceType;

  @Field(() => String, { description: '備考' })
  readonly memo: string;

  constructor(init: CreateSectionInput) {
    this.contestId = init?.contestId;
    this.name = init?.name;
    this.danceType = init?.danceType;
    this.memo = init?.memo;
  }
}

export enum DanceType {
  WALTZ = 'WALTZ',
  TANGO = 'TANGO',
  SLOW_FOX_TROT = 'SLOW_FOX_TROT',
  QUICK_STEP = 'QUICK_STEP',
  VIENNESE_WALTZ = 'VIENNESE_WALTZ',
  BRUCE = 'BRUCE',
  RUMBA = 'RUMBA',
  CHA_CHA_CHA = 'CHA_CHA_CHA',
  SAMBA = 'SAMBA',
  PASO_DOBLE = 'PASO_DOBLE',
  JIVE = 'JIVE',
  JITTERBUG = 'JITTERBUG',
}

registerEnumType(DanceType, {
  name: 'DanceType',
});

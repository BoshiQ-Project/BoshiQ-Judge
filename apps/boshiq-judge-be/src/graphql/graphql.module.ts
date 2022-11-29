import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ContestModule } from './contest/contest.module';

@Module({
  imports: [
    ContestModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'apps/boshiq-judge-fe/graphql/schema.gql',
      playground: true,
    }),
  ],
})
export class MyGraphQLModule {}

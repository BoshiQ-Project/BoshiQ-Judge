import { Module } from '@nestjs/common';
import { MyGraphQLModule } from '../graphql/graphql.module';

@Module({
  imports: [MyGraphQLModule],
})
export class AppModule {}

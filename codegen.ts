import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'apps/boshiq-judge-fe/graphql/schema.gql',
  documents: 'apps/boshiq-judge-fe/components/**/*.gql',
  generates: {
    'apps/boshiq-judge-fe/graphql/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
    },
  },
};

export default config;

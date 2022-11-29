import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'http://localhost:3333/graphql',
});

export const UrqlProvider = ({ children }) => {
  return <Provider value={client}>{children}</Provider>;
};

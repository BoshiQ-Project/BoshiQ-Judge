import Layout from '@components/layout/layout';
import { UrqlProvider } from 'graphql/graphqlProvider';
import { AppProps } from 'next/app';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UrqlProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UrqlProvider>
  );
}

export default CustomApp;

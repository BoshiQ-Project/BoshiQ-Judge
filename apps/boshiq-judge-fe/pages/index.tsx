import Head from 'next/head';
import IndexPage from '@components/pages/indexPage';

export function Index() {
  return (
    <>
      <Head>
        <title>Welcome to BoshiQ Judge!</title>
      </Head>
      <main className="app">
        <IndexPage />
      </main>
    </>
  );
}

export default Index;

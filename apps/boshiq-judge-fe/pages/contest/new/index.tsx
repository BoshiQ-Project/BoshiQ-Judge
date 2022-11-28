import NewContestPage from '@components/pages/contest/new/newContestPage';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <title>新コンテスト作成ページ</title>
      </Head>
      <main className="app">
        <NewContestPage />
      </main>
    </>
  );
}

export default Index;

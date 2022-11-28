import ContestPage from '@components/pages/contest/contestPage';
import Head from 'next/head';

export function Index() {
  return (
    <>
      <Head>
        <title>コンテスト一覧ページ</title>
      </Head>
      <main className="app">
        <ContestPage />
      </main>
    </>
  );
}

export default Index;

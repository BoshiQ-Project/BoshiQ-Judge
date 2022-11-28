import { HeatPage } from '@components/pages/contest/contestId/section/sectionId/roundNumber/heatNumber/heatPage';
import Head from 'next/head';
export function Index() {
  return (
    <>
      <Head>
        <title>ヒート詳細ページ</title>
      </Head>
      <main className="app">
        <HeatPage />
      </main>
    </>
  );
}

export default Index;

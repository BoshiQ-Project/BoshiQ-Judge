import { RoundPage } from '@components/pages/contest/contestId/section/sectionId/roundNumber/roundPage';
import Head from 'next/head';
export function Index() {
  return (
    <>
      <Head>
        <title>ラウンド詳細ページ</title>
      </Head>
      <main className="app">
        <RoundPage />
      </main>
    </>
  );
}

export default Index;

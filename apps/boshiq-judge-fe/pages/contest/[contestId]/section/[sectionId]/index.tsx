import { SectionDetailPage } from '@components/pages/contest/contestId/section/sectionId/sectionDetailPage';
import Head from 'next/head';
export function Index() {
  return (
    <>
      <Head>
        <title>セクション詳細ページ</title>
      </Head>
      <main className="app">
        <SectionDetailPage />
      </main>
    </>
  );
}

export default Index;

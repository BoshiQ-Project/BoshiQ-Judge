import { SectionPage } from '@components/pages/contest/contestId/section/sectionPage';
import Head from 'next/head';
export function Index() {
  return (
    <>
      <Head>
        <title>セクション一覧ページ</title>
      </Head>
      <main className="app">
        <SectionPage />
      </main>
    </>
  );
}

export default Index;

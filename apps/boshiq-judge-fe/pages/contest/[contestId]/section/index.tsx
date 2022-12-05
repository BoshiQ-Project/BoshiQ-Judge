import { SectionPage } from '@components/pages/contest/contestId/section/sectionPage';
import Head from 'next/head';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();
  const { contestId } = router.query;
  if (Array.isArray(contestId)) {
    return <div>ERROR</div>;
  }
  return (
    <>
      <Head>
        <title>セクション一覧ページ</title>
      </Head>
      <main className="app">
        <SectionPage contestId={parseInt(contestId)} />
      </main>
    </>
  );
}

export default Index;

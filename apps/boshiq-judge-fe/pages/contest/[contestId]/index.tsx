import Head from 'next/head';
import ContestDetailPage from '@components/pages/contest/contestId/contestDetailPage';
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
        <title>コンテスト詳細ページ</title>
      </Head>
      <main className="app">
        <ContestDetailPage contestId={parseInt(contestId)} />
      </main>
    </>
  );
}

export default Index;

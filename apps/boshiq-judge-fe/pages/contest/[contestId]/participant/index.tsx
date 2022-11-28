import { ParticipantPage } from '@components/pages/contest/contestId/participant/participantPage';
import Head from 'next/head';
export function Index() {
  return (
    <>
      <Head>
        <title>参加者一覧ページ</title>
      </Head>
      <main className="app">
        <ParticipantPage />
      </main>
    </>
  );
}

export default Index;

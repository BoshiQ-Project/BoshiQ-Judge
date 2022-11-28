import TimeTablePage from '@components/pages/contest/contestId/timetable/timetablePage';
import Head from 'next/head';
export function Index() {
  return (
    <>
      <Head>
        <title>タイムテーブル設定ページ</title>
      </Head>
      <main className="app">
        <TimeTablePage />
      </main>
    </>
  );
}

export default Index;

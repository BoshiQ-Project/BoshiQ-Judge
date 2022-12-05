import { FC } from 'react';
import { useContestDetailPageQuery } from '@graphql/graphql';
import Link from 'next/link';

export type ContestDetailPageProps = {
  contestId: number;
};

export const ContestDetailPage: FC<ContestDetailPageProps> = ({
  contestId,
}) => {
  const [result] = useContestDetailPageQuery({
    variables: {
      contestId,
    },
  });

  if (!result.data) {
    return <div>LOADING</div>;
  }
  const contest = result.data.contest;

  return (
    <div>
      <p>大会名：{contest.name}</p>
      <p>開催日：{contest.date}</p>
      <p>備考：{contest.memo}</p>
      <p>
        <Link href={`/contest/${contestId}/section`}>セクション一覧</Link>
      </p>
      <p>
        <Link href={`/contest/${contestId}/participant`}>エントリー状況</Link>
      </p>
      <p>
        <Link href={`/contest/${contestId}/timetable`}>タイムテーブル</Link>
      </p>
    </div>
  );
};

export default ContestDetailPage;

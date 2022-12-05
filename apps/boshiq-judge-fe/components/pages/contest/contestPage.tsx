import styled from '@emotion/styled';
import Link from 'next/link';
import { Button, Modal, Table, Text } from '@mantine/core';
import { ContestDto, useContestPageQuery } from '@graphql/graphql';
import { FC, useMemo, useState } from 'react';
import { NewContestForm } from '@components/pages/contest/newContestForm';

const StyledPage = styled.div`
  .page {
  }
`;

export function ContestPage() {
  const [result] = useContestPageQuery({
    variables: {
      userId: 'ogura',
    },
  });

  const [modalOpen, setModalOpen] = useState(false);

  if (!result.data) {
    return <div>ERROR</div>;
  }

  const contests = result.data.contests;

  return (
    <StyledPage>
      <ContestHeaderContainer>
        <Text fz="lg" fw={700}>
          大会一覧
        </Text>
        <Button onClick={() => setModalOpen(true)}>new Contest</Button>
      </ContestHeaderContainer>
      <ContestList contests={contests} />

      <Modal opened={modalOpen} onClose={() => setModalOpen(false)}>
        <NewContestForm closeForm={() => setModalOpen(false)} />
      </Modal>
    </StyledPage>
  );
}

type ContestListProps = {
  contests: ContestDto[];
};

const ContestList: FC<ContestListProps> = ({ contests }) => {
  const sortedContest = useMemo(() => {
    const sortedContest = [...contests];
    sortedContest.sort(
      ({ name: nameA, date: dateA }, { name: nameB, date: dateB }) => {
        if (dateA === undefined && dateB === undefined)
          return nameA > nameB ? 1 : -1;
        if (dateA == undefined) return -1;
        if (dateB == undefined) return 1;
        return dateA > dateB ? -1 : 1;
      }
    );
    return sortedContest;
  }, [contests]);

  return (
    <Table>
      <thead>
        <tr>
          <th>大会名</th>
          <th>開催日</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        {sortedContest.map((contest, ind) => (
          <tr key={contest.id}>
            <td>
              <Link href={`/contest/${contest.id}`}>{contest.name}</Link>
            </td>
            <td>{contest.date ?? '未定'}</td>
            <td>{contest.memo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const ContestHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

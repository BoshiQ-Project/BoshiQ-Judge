import styled from '@emotion/styled';
import { FC, useState } from 'react';
import {
  SectionPageSectionFragment,
  useSectionPageQuery,
} from '@graphql/graphql';
import { Button, Modal, Table, Text } from '@mantine/core';
import Link from 'next/link';
import { NewSectionForm } from '@components/pages/contest/contestId/section/newSectionForm';

const StyledPage = styled.div`
  .page {
  }
`;

export type SectionPageProps = {
  contestId: number;
};

export const SectionPage: FC<SectionPageProps> = ({ contestId }) => {
  const [result] = useSectionPageQuery({
    variables: {
      contestId,
    },
  });

  const [modalOpen, setModalOpen] = useState(false);

  if (!result.data) {
    return <div>LOADING</div>;
  }

  const { contest, sections } = result.data;
  return (
    <StyledPage>
      <SectionHeaderContainer>
        <Text fz="lg" fw={700}>
          {contest.name} セクション一覧
        </Text>
        <Button onClick={() => setModalOpen(true)}>new Section</Button>
      </SectionHeaderContainer>
      <SectionList contestId={contestId} sections={sections} />
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)}>
        <NewSectionForm
          contestId={contestId}
          closeForm={() => setModalOpen(false)}
        />
      </Modal>
    </StyledPage>
  );
};

type SectionListProps = {
  contestId: number;
  sections: SectionPageSectionFragment[];
};

const SectionList: FC<SectionListProps> = ({ contestId, sections }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>セクション名</th>
          <th>種目</th>
          <th>備考</th>
        </tr>
      </thead>
      <tbody>
        {sections.map((section, ind) => (
          <tr key={section.id}>
            <td>
              <Link href={`/contest/${contestId}/section/${section.id}`}>
                {section.name}
              </Link>
            </td>
            <td>{section.danceType ?? '未定'}</td>
            <td>{section.memo}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const SectionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

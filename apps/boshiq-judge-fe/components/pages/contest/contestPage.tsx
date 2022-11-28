import styled from '@emotion/styled';
import Link from 'next/link';

const StyledPage = styled.div`
  .page {
  }
`;

export function ContestPage() {
  return (
    <StyledPage>
      <Link href="/contest/new">コンテスト新規作成</Link>
    </StyledPage>
  );
}

export default ContestPage;

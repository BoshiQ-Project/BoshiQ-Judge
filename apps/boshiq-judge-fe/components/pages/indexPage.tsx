import styled from '@emotion/styled';
import Link from 'next/link';

const StyledPage = styled.div`
  .page {
  }
`;

export function IndexPage() {
  return (
    <StyledPage>
      <p>ようこそだ</p>
      <p>
        <Link href="/contest">コンテスト一覧</Link>
      </p>
    </StyledPage>
  );
}

export default IndexPage;

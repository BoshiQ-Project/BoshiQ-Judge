import styled from '@emotion/styled';
import Link from 'next/link';
import { Button } from '@mantine/core';

const StyledPage = styled.div`
  .page {
  }
`;

export function IndexPage() {
  return (
    <StyledPage>
      <p>ようこそだ</p>
      <p>
        <Link href="/contest">
          <Button> 大会一覧</Button>
        </Link>
      </p>
    </StyledPage>
  );
}

export default IndexPage;

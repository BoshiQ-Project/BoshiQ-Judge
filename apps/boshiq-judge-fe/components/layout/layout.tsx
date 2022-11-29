import { AppShell, Header, Center } from '@mantine/core';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={50} p="xs">
          <Center>
            <Link href="/">BoshiQ Judge</Link>
          </Center>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <main>{children}</main>
    </AppShell>
  );
}

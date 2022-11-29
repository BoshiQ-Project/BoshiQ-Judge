import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useCreateContestMutation } from 'graphql/graphql';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export function NewContestPage() {
  const form = useForm({
    initialValues: {
      name: '',
      date: '',
      memo: '',
    },

    validate: {
      date: (value) =>
        /(^$)|(^\d\d\d\d-\d\d-\d\d$)/.test(value) ? null : 'Invalid date',
    },
  });

  const [, executeMutation] = useCreateContestMutation();

  const router = useRouter();

  const createContest = useCallback(
    async (name: string, date: string, memo: string) => {
      const result = await executeMutation({
        input: {
          admin_user_id: 'ogura',
          name,
          date: date === '' ? undefined : date,
          memo,
        },
      });
      if (result.error === undefined) {
        router.push('/contest');
      } else {
        console.error(result.error);
      }
    },
    [executeMutation, router]
  );

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit(({ name, date, memo }) =>
          createContest(name, date, memo)
        )}
      >
        <TextInput
          withAsterisk
          label="大会名"
          {...form.getInputProps('name')}
        />
        <TextInput label="開催日" {...form.getInputProps('date')} />
        <TextInput withAsterisk label="備考" {...form.getInputProps('memo')} />
        <Group position="right" mt="md">
          <Button type="submit">作成</Button>
        </Group>
      </form>
    </Box>
  );
}

export default NewContestPage;

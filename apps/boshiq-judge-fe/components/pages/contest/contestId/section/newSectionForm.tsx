import { TextInput, Button, Group, Box, Select } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DanceType, useCreateSectionMutation } from 'graphql/graphql';
import { FC, useCallback } from 'react';

type NewSectionFormParam = {
  contestId: number;
  closeForm: () => void;
};

export const NewSectionForm: FC<NewSectionFormParam> = ({
  contestId,
  closeForm,
}) => {
  const form = useForm<{
    name: string;
    danceType: DanceType | undefined;
    memo: string;
  }>({
    initialValues: {
      name: '',
      danceType: undefined,
      memo: '',
    },
  });

  const [, executeMutation] = useCreateSectionMutation();

  const createContest = useCallback(
    async (name: string, danceType: DanceType, memo: string) => {
      const result = await executeMutation({
        input: {
          contestId,
          name,
          danceType,
          memo,
        },
      });
      if (result.error === undefined) {
        closeForm();
      } else {
        console.error(result.error);
      }
    },
    [contestId, executeMutation, closeForm]
  );

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit(({ name, danceType, memo }) =>
          createContest(name, danceType, memo)
        )}
      >
        <TextInput
          withAsterisk
          label="セクション名"
          {...form.getInputProps('name')}
        />
        <Select
          withAsterisk
          label="ダンス種目"
          data={[
            { value: DanceType.Waltz, label: 'Waltz' },
            { value: DanceType.Tango, label: 'Tango' },
            { value: DanceType.SlowFoxTrot, label: 'SlowFoxTrot' },
            { value: DanceType.QuickStep, label: 'QuickStep' },
            { value: DanceType.VienneseWaltz, label: 'VienneseWaltz' },
            { value: DanceType.Rumba, label: 'Rumba' },
            { value: DanceType.ChaChaCha, label: 'ChaChaCha' },
            { value: DanceType.Samba, label: 'Samba' },
            { value: DanceType.PasoDoble, label: 'PasoDoble' },
            { value: DanceType.Jive, label: 'Jive' },
            { value: DanceType.Bruce, label: 'Bruce' },
            { value: DanceType.Jitterbug, label: 'Jitterbug' },
          ]}
          {...form.getInputProps('danceType')}
        />
        <TextInput withAsterisk label="備考" {...form.getInputProps('memo')} />
        <Group position="right" mt="md">
          <Button type="submit">作成</Button>
        </Group>
      </form>
    </Box>
  );
};

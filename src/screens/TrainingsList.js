import React, {useContext} from 'react';
import {
  Avatar,
  Pressable,
  Stack,
  Heading,
  Divider,
  Flex,
  Text,
  VStack,
} from 'native-base';
import {TrainingsContext} from '../context/TrainingsContext';

const TrainingsList = () => {
  const {trainings} = useContext(TrainingsContext);

  return (
    <VStack space={2}>
      {trainings.map(training => (
        <Pressable width={'100%'} py={2} key={training.id}>
          <Flex
            maxW={'100%'}
            minW={'100%'}
            flexDirection="row"
            alignItems="center">
            <Stack space={3} ml={2} width={'80%'}>
              <Flex
                flexDirection="row"
                width={'100%'}
                justifyContent="space-between">
                <Heading size={'sm'} noOfLines={1}>
                  {training.topic}
                </Heading>
                <Text fontStyle="italic" color="gray.500">
                  {training.training_date}
                </Text>
              </Flex>
            </Stack>
          </Flex>
          <Divider width={'100%'} />
        </Pressable>
      ))}
    </VStack>
  );
};

export default TrainingsList;

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
import {FarmersContext} from '../context/FarmersContext';

const FarmersList = () => {
  const {farmers} = useContext(FarmersContext);
  return (
    <VStack space={2}>
      {farmers.map(farmer => (
        <Pressable width={'100%'} py={2} key={farmer.farmer_id}>
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
                  {farmer.firstname} {farmer.lastname}
                </Heading>
                <Text fontStyle="italic" color="gray.500">
                  {farmer.training_date}
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

export default FarmersList;

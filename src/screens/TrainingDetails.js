import React from 'react';
import {
  View,
  Text,
  Box,
  VStack,
  Heading,
  Center,
  Spacer,
  Button,
  Pressable,
  HStack,
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';

const TrainingDetails = ({navigation, route}) => {
  const {code, name, community, topic, date} = route.params;
  return (
    <View pb={5} flex={1}>
      <Center pl={3} width={'100%'}>
        <VStack space={2} mt={3} width={'100%'}>
          <Box shadow={3} style={styles.cardText}>
            <Text mb={3}>Name of Trainer</Text>
            <Heading>{name}</Heading>
          </Box>
          <Box shadow={3} style={styles.cardText}>
            <Text mb={3}>Name of Community</Text>
            <Heading>{community}</Heading>
          </Box>
          <Box shadow={3} style={styles.cardText}>
            <Text mb={3}>Training Topic</Text>
            <Heading>{topic}</Heading>
          </Box>
          <Box shadow={3} style={styles.cardText}>
            <Text mb={3}>Date of Training</Text>
            <Heading>{date}</Heading>
          </Box>
        </VStack>
      </Center>
      <Spacer />
      <Center>
        <Pressable
          p={5}
          width={'95%'}
          shadow={1}
          rounded={5}
          bg="gray.100"
          onPress={() => navigation.navigate('scan', {code, date})}
          justifyContent="center"
          alignItems="center">
          <HStack space={4}>
            <FontAwesome name="user-plus" size={35} color="green" />
            <Text fontSize={20} mt={2}>
              ADD PARTICIPANT
            </Text>
          </HStack>
        </Pressable>
      </Center>
    </View>
  );
};

export default TrainingDetails;

const styles = StyleSheet.create({
  cardText: {
    borderLeftWidth: 5,
    borderLeftColor: 'black',
    borderStyle: 'solid',
    backgroundColor: 'white',
    width: '97%',
    padding: 10,
  },
});

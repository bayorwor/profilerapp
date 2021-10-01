import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  Pressable,
  Image,
  Center,
  HStack,
  Spacer,
  VStack,
  Heading,
  useDisclose,
} from 'native-base';
import synceImg from '../assets/sync.png';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TrainingsContext} from '../context/TrainingsContext';
import {FarmersContext} from '../context/FarmersContext';
import ViewDataType from '../components/ViewDataType';
import BottomSheet from '../components/BottomSheet';
import {TransactionsContext} from '../context/TransactionsContext';

const HomeScreen = ({navigation}) => {
  const {getLocalTrainings, getTrainings} = useContext(TrainingsContext);
  const {getFarmers, getLocalFarmers} = useContext(FarmersContext);
  const {SaveToServer} = useContext(TransactionsContext);

  useEffect(() => {
    getLocalTrainings();
    getLocalFarmers();
  }, []);

  const {isOpen: toggleOpen, onOpen, onClose} = useDisclose();

  const [isOpen, setisOpen] = useState(false);

  const toggleShow = () => setisOpen(!isOpen);

  const handleGetData = () => {
    getFarmers();
    getTrainings();
  };

  const handleSaveToServer = () => {
    SaveToServer();
  };

  return (
    <Center flex={1} backgroundColor="white" p={3}>
      <Image source={synceImg} alt="sync image" size={'2xl'} />
      <Heading>welcome to Giz profiler</Heading>
      <VStack space={3} mt={10}>
        <HStack>
          <Pressable
            width={'49%'}
            minHeight={120}
            shadow={1}
            rounded={5}
            bg="gray.100"
            onPress={() => handleGetData()}
            justifyContent="center"
            alignItems="center">
            <FontAwesome name="cloud-download" size={40} />
            <Text fontSize={20} mt={2}>
              Get Data
            </Text>
          </Pressable>
          <Spacer />
          <Pressable
            width={'49%'}
            minHeight={120}
            shadow={1}
            rounded={5}
            bg="gray.100"
            onPress={toggleShow}
            justifyContent="center"
            alignItems="center">
            <FontAwesome name="eye" size={40} />
            <Text fontSize={20} mt={2}>
              View Data
            </Text>
          </Pressable>
        </HStack>
        <HStack>
          <Pressable
            width={'49%'}
            minHeight={120}
            shadow={1}
            rounded={5}
            bg="gray.100"
            onPress={handleSaveToServer}
            justifyContent="center"
            alignItems="center">
            <FontAwesome name="cloud-upload" size={40} />
            <Text fontSize={20} mt={2}>
              Sync Data
            </Text>
          </Pressable>
          <Spacer />
          <Pressable
            width={'49%'}
            minHeight={120}
            shadow={1}
            rounded={5}
            bg="gray.100"
            onPress={onOpen}
            justifyContent="center"
            alignItems="center">
            <FontAwesome name="check-square-o" size={40} />
            <Text fontSize={20} mt={2}>
              Start Trainings
            </Text>
          </Pressable>
        </HStack>
      </VStack>
      <ViewDataType
        isOpen={isOpen}
        navigation={navigation}
        toggleShow={toggleShow}
      />
      <BottomSheet
        isOpen={toggleOpen}
        onClose={onClose}
        navigation={navigation}
      />
    </Center>
  );
};

export default HomeScreen;

import React, {useContext} from 'react';
import {
  Center,
  Modal,
  Pressable,
  HStack,
  Text,
  Image,
  Spacer,
} from 'native-base';
import farmerImg from '../assets/farmerone.png';
import trainingImg from '../assets/training.png';

const ViewDataType = ({isOpen, navigation, toggleShow}) => {
  const handleNavigation = txt => {
    navigation.navigate(txt);
    toggleShow();
  };
  return (
    <Modal
      isOpen={isOpen}
      width={'100%'}
      alignSelf="center"
      onClose={toggleShow}>
      <Modal.Content>
        {/* <Modal.CloseButton /> */}
        <Modal.Body>
          <Center flex={1} flexDirection="row">
            <HStack>
              <Pressable
                width={'47%'}
                minHeight={120}
                shadow={1}
                rounded={5}
                bg="gray.200"
                onPress={() => handleNavigation('alltrainings')}
                justifyContent="center"
                alignItems="center">
                <Image source={trainingImg} alt="no training" size={'sm'} />
                <Text fontSize={20} mt={2}>
                  All Trainings
                </Text>
              </Pressable>
              <Spacer />
              <Pressable
                width={'47%'}
                minHeight={120}
                shadow={1}
                rounded={5}
                bg="gray.100"
                onPress={() => handleNavigation('allfarmers')}
                justifyContent="center"
                alignItems="center">
                <Image source={farmerImg} alt="no training" size={'sm'} />
                <Text fontSize={20} mt={2}>
                  All farmers
                </Text>
              </Pressable>
            </HStack>
          </Center>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default ViewDataType;

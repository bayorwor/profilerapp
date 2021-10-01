import React, {useContext} from 'react';
import {
  Center,
  Modal,
  Pressable,
  HStack,
  Text,
  Image,
  Spacer,
  Button,
  View,
  VStack,
} from 'native-base';
import {FarmersContext} from '../context/FarmersContext';
import {TransactionsContext} from '../context/TransactionsContext';

const FarmerModal = ({isOpen, navigation, onClose, info, code, date}) => {
  const {farmers} = useContext(FarmersContext);
  const {SaveToLocalStorage} = useContext(TransactionsContext);

  const farmersInfo = farmers.filter(farmer => farmer.farmer_id == info);

  const handleNavigation = txt => {
    navigation.navigate(txt);
    toggleShow();
  };

  const handleSaveToLocal = () => {
    let participant = {
      training_id: code,
      farmer_id: info,
      training_date: date,
    };
    SaveToLocalStorage(participant);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} width={'100%'} alignSelf="center">
      <Modal.Content>
        <Modal.Body>
          <Center flex={1} flexDirection="row">
            {farmersInfo.map(farmer => (
              <VStack key={farmer.farmer_id} space={4}>
                <Text>Training Code: {code}</Text>
                <Text>Training Date: {date}</Text>
                <Text>Farmer ID: {farmer.farmer_id}</Text>
                <Text>
                  Name: {farmer.firstname} {farmer.lastname}
                </Text>
                <Text>Gender: {farmer.gender}</Text>
                <Text>Community: {farmer.community}</Text>
              </VStack>
            ))}
          </Center>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => onClose()}>
              Cancel
            </Button>
            <Button onPress={handleSaveToLocal}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default FarmerModal;

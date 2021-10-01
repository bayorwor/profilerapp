import React, {useContext} from 'react';
import {
  Fab,
  Actionsheet,
  useDisclose,
  Divider,
  Box,
  Heading,
  View,
  Text,
} from 'native-base';
import {TrainingsContext} from '../context/TrainingsContext';

export function BottomSheet({isOpen, onClose, navigation}) {
  const {trainings} = useContext(TrainingsContext);

  const handleNavigation = (txt, params) => {
    navigation.navigate(txt, params);
    onClose();
  };
  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Heading mb={5}>select upcoming training</Heading>
          <Divider />
          {trainings.map((training, index) => (
            <View key={training.id}>
              <Actionsheet.Item
                onPress={() => {
                  handleNavigation('trainingdetails', {
                    code: training.training_code,
                    topic: training.topic,
                    name: training.trainer_name,
                    date: training.training_date,
                    community: training.community,
                  });
                }}>
                <Text>
                  {index + 1}. {training.topic}
                </Text>
              </Actionsheet.Item>
              <Divider bgColor="gray.600" />
            </View>
          ))}
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default BottomSheet;

import React, {useContext, useState} from 'react';
import {View, useDisclose} from 'native-base';
import BarcodeScan from 'react-native-barcode-scanner-google';
import FarmerModal from './FarmerModal';
import {FarmersContext} from '../context/FarmersContext';

const BarcodeScanner = ({route}) => {
  const {code, date} = route.params;
  const [info, setInfo] = useState('');

  const {onOpen, onClose} = useDisclose();

  const [isOpen, setisOpen] = useState(false);

  const toggleShow = () => setisOpen(!isOpen);

  return (
    <>
      <View flex={1}>
        <BarcodeScan
          style={{flex: 1}}
          onBarcodeRead={({data, type}) => {
            setInfo(data);
            setisOpen(!isOpen);
          }}
        />
      </View>
      <FarmerModal
        isOpen={isOpen}
        onOpen={onOpen}
        info={info}
        code={code}
        date={date}
        onClose={toggleShow}
      />
    </>
  );
};

export default BarcodeScanner;

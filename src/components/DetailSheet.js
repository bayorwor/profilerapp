import React, {useEffect} from 'react';
import {Button, Actionsheet, useDisclose} from 'native-base';

export function DetailSheet({isOpen, onOpen, onClose, data}) {
  //   const {isOpen, onOpen, onClose} = useDisclose();
  useEffect(() => {
    if (data) {
      onOpen();
    }
  }, [data]);

  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item>{data}</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

export default DetailSheet;

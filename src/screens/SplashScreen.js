import React, {useEffect} from 'react';
import {Center, Heading, Image} from 'native-base';
import splashImg from '../assets/farmer.png';
import bannerImg from '../assets/banner.jpeg';

const SplashScreen = ({navigation}) => {
  //navigation after 3s
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 1000);
  }, []);

  return (
    <Center flex={1}>
      <Image source={splashImg} alt="no splash" size={'2xl'} />
      <Heading m={10}>Welcome to Farmers collect</Heading>
      <Image source={bannerImg} alt="no splash" size={'xs'} width={'90%'} />
    </Center>
  );
};

export default SplashScreen;

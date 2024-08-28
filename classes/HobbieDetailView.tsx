import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type HobbyDetailViewProps = {
  route: RouteProp<RootStackParamList, 'HobbyDetail'>;
};

const HobbyDetailView: React.FC<HobbyDetailViewProps> = ({ route }) => {
  const { hobby } = route.params;

  const imageSource = () => {
    switch(hobby.picture) {
      case 'Baseball.jpg':
        return require('../assets/Baseball.jpg');
      case 'Football.jpg':
        return require('../assets/Football.jpg');
      case 'Gym.jpeg':
        return require('../assets/Gym.jpeg');
      default:
        return require('../assets/Freddie.jpg'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{hobby.name}</Text>
      <Image source={imageSource()} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
  },
});

export default HobbyDetailView;
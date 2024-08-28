import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';

type FriendDetailViewProps = {
  route: RouteProp<RootStackParamList, 'FriendDetail'>;
};

const FriendDetailView: React.FC<FriendDetailViewProps> = ({ route }) => {
  const { friend } = route.params;

  const imageSource = () => {
    switch(friend.picture) {
      case 'Freddie.jpg':
        return require('../assets/Freddie.jpg');
      case 'Roberto.jpg':
        return require('../assets/Roberto.jpg');
      case 'Michell.jpg':
        return require('../assets/Michell.jpg');
      default:
        return require('../assets/Freddie.jpg'); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.age}>Edad: {friend.age}</Text>
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
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
  },
});

export default FriendDetailView;
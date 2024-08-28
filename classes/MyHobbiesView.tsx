import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Hobby } from '../App';

type MyHobbiesViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'MyHobbies'>;
};

const MyHobbiesView: React.FC<MyHobbiesViewProps> = ({ navigation }) => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    setHobbies([
      { name: 'Watch Baseball', picture: 'Baseball.jpg' },
      { name: 'Play Football', picture: 'Football.jpg' },
      { name: 'Go to the Gym', picture: 'Gym.jpeg' },
    ]);
  }, []);

  const renderItem = ({ item }: { item: Hobby }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('HobbyDetail', { hobby: item })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={hobbies}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MyHobbiesView;
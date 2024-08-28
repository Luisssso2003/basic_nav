import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type MyFriendsViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'MyFriends'>;
};

interface Friend {
  name: string;
  age: string;
  picture: string;
}

const MyFriendsView: React.FC<MyFriendsViewProps> = ({ navigation }) => {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    setFriends([
      { name: 'Freddie', age: '19', picture: 'Freddie.jpg' },
      { name: 'Roberto', age: '22', picture: 'Roberto.jpg' },
      { name: 'Michell', age: '19', picture: 'Michell.jpg' },
    ]);
  }, []);

  const renderItem = ({ item }: { item: Friend }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('FriendDetail', { friend: item })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
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

export default MyFriendsView;
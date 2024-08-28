import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type MainViewProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Main'>;
};

const MainView: React.FC<MainViewProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Mis Hobbies"
        onPress={() => navigation.navigate('MyHobbies')}
      />
      <Button
        title="Mis Amigos"
        onPress={() => navigation.navigate('MyFriends')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainView;
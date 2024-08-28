import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainView from './classes/MainView';
import MyHobbiesView from './classes/MyHobbiesView';
import HobbyDetailView from './classes/HobbieDetailView';
import MyFriendsView from './classes/MyFriendsView';
import FriendDetailView from './classes/FriendsDetailView';

type FriendStack = {
  Main: undefined; 
  MyHobbies: undefined;
  HobbyDetail: {
    hobby: Hobby;
  };
  MyFriends: undefined;
  FriendDetail: {
    friend: Friend;
  };
};

export type RootStackParamList = FriendStack;

export type Hobby = {
  name: string;
  picture: string;
};

export type Friend = {
  name: string;
  age: string;
  picture: string;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainView} />
        <Stack.Screen name="MyHobbies" component={MyHobbiesView} />
        <Stack.Screen name="HobbyDetail" component={HobbyDetailView} />
        <Stack.Screen name="MyFriends" component={MyFriendsView} />
        <Stack.Screen name="FriendDetail" component={FriendDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
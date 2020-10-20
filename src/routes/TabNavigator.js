import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  faPhone, faHome, faBook, faUserCog
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  HomeStackNavigator,
  HotlinesStackNavigator,
  ContentStackNavigator,
  UserSettingsStackNavigator,
} from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'Hotlines') {
            iconName = faPhone;
          } else if (route.name === 'Content') {
            iconName = faBook;
          } else if (route.name === 'UserSettings') {
            iconName = faUserCog;
          }
          return <FontAwesomeIcon icon={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Hotlines" component={HotlinesStackNavigator} />
      <Tab.Screen name="Content" component={ContentStackNavigator} />
      <Tab.Screen name="UserSettings" component={UserSettingsStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

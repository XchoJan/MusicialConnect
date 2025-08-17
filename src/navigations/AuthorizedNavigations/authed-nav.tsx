import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Platform, Dimensions, StatusBar } from 'react-native';

let Tab = createBottomTabNavigator();

import MainNavigator from '../TabNavigators/main-navigator.tsx';
import NotificationsNavigator from '../TabNavigators/notifications-navigator.tsx';
import ProfileNavigator from '../TabNavigators/profile-navigator.tsx';
import SearchNavigator from '../TabNavigators/search-navigator.tsx';
import MusicianConnectNavigator from '../TabNavigators/musician-connect-navigator.tsx';

import HomePageIcon from '../../assets/icons/HomePageIcon';
import CommentIcon from '../../assets/icons/CommentIcon';
import ProfileIcon from '../../assets/icons/ProfileIcon';
import SearchIcon from '../../assets/icons/SearchIcon';
import { colors } from '../../theme/colors';
import PersonsIcon from '../../assets/icons/PersonsIcon';
import SearchIconTab from '../../assets/icons/SearchIconTab';
import BellIcon from '../../assets/icons/BellIcon';
import Api from '../../api';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../store/features/userData/userDataSlice.ts';
import {setInstruments} from "../../store/features/instruments/instrumentsSlice.ts";

const AuthorizedNavigations = () => {
  const dispatch = useDispatch();

  const handleGetUserData = async () => {
    try {
      const response = await Api.getUserData();
      dispatch(setUserData(response.data.user));
    } catch (e) {
      console.log(e);
    }
  };

  const instruments = async () => {
    try {
      const res = await Api.getInstruments();
      dispatch(setInstruments(res.data.instruments));
    } catch (e: any) {
      console.log(e.response, 'get instruments error');
    }
  };

  useEffect(() => {
    (async () => {
      await handleGetUserData();
      await instruments();
    })();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.gray,
          paddingTop: 14,
        },
        tabBarInactiveTintColor: '#B2B2B2',
        tabBarActiveTintColor: '#000000',
      }}
      initialRouteName={'MainNavigator'}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <HomePageIcon />,
          tabBarShowLabel: false,
        }}
        name="MainNavigator"
        component={MainNavigator}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <PersonsIcon />,
          tabBarShowLabel: false,
        }}
        name="SearchNavigator"
        component={SearchNavigator}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <BellIcon />,
          tabBarShowLabel: false,
        }}
        name="NotificationsNavigator"
        component={NotificationsNavigator}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <SearchIconTab />,
          tabBarShowLabel: false,
        }}
        name="MusicianConnectNavigator"
        component={MusicianConnectNavigator}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon />,
          tabBarShowLabel: false,
        }}
        name="ProfileNavigator"
        component={ProfileNavigator}
      />
    </Tab.Navigator>
  );
};

export default AuthorizedNavigations;

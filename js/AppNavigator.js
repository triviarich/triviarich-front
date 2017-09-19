import React from 'react';
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';
import PlayNavigator from './play/PlayNavigator'

export default AppNavigator = TabNavigator({
  PlayNavigator: {
    screen: PlayNavigator,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon name="money" size={26} color={tintColor}  />
      )
    }),
  }
})

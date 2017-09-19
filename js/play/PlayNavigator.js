import React from 'react';
import { StackNavigator } from 'react-navigation';
import Play from './Play';
import FindingGame from './FindingGame';

export default PlayNavigator = StackNavigator({
  Play: { screen: Play },
  FindingGame: { screen: FindingGame },
});

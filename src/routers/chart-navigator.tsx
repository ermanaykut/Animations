import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DropDownAnimation, LoginAnimation} from '../pages';
import CustomTabBar from '../components/CustomTabBar';
import { colors } from '../constants/colors';

const Tab = createBottomTabNavigator();

export default function ChartNavigator() {
  return (
    <Tab.Navigator tabBar={(props: any) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="LoginAnimation"
        component={LoginAnimation}
        initialParams={{iconName: 'pencil-square-o : FontAwe'}}
      />
      <Tab.Screen
        name="DropDownAnimation"
        component={DropDownAnimation}
        initialParams={{iconName: 'cloud-download-outline : Ionicons'}}
      />
    </Tab.Navigator>
  );
}

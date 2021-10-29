
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../constants/Colors";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from '../screens/TestScreen';



 const BottomTab = createBottomTabNavigator();

 export default  function BottomTabNavigator() {
 
   return (
     <BottomTab.Navigator
       initialRouteName="TabOne"
       screenOptions={{
         tabBarActiveTintColor: Colors.light.tint,
       }}>
       <BottomTab.Screen
         name="TabOne"
         component={TabOneScreen}
         options={({ navigation }) => ({
           title: 'Tab One',
           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         
         })}
       />
       <BottomTab.Screen
         name="TabTwo"
         component={TabTwoNavigator}
         options={{
           title: 'Tab Two',
           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
         }}
       />
     </BottomTab.Navigator>
   );
 }


const TabTwoStack = createNativeStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerShown: false }}
      />
      <TabTwoStack.Screen
        name="TestScreen"
        component={TestScreen}
        options={{ headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 function TabBarIcon(props: {
   name: React.ComponentProps<typeof FontAwesome>['name'];
   color: string;
 }) {
   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
 }
 
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/////1st Screen
function ScreenOne({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Screen 1') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Screen 2') {
            iconName = focused
              ? 'ios-list-box'
              : 'ios-list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'darkblue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Tab 1" component={TabOne} />
      <Tab.Screen name="Tab 2" component={TabTwo} />
    </Tab.Navigator>
  );
}
function TabOne() {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 300, fontWeight: 'bold' }}>
        This is the 1st screen,
      </Text>
      <Text style={{ textAlign: 'center', fontWeight: '300', color: 'grey' }}>
        viewing the 1st tab
      </Text>
    </View>
  );
}
function TabTwo() {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 300 }}>
        Welcome to the 2nd tab page!
      </Text>
    </View>
  );
}


/////2nd Screen
function ScreenTwo({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back to 1st screen" />
      <Text>This is the 2nd Screen</Text>
    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Screen 1">
        <Drawer.Screen name="Screen 1" component={ScreenOne} />
        <Drawer.Screen name="Screen 2" component={ScreenTwo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
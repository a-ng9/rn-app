import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//import { Localization} from 'expo-localization';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js'


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const en = {
  feu: 'The fire',
  bar: 'Bar {{someValue}}',
};

const fr = {
  feu: 'Le feu',
  bar: 'Bár {{someValue}}',
};

i18n.fallbacks = true;
i18n.translations = { fr, en };

 i18n.locale = Localization.locale;
 i18n.locale = 'fr';



/////1st Screen
function ScreenOne({ navigation }) {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tab 1') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } else if (route.name === 'Tab 2') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'darkblue',
        inactiveTintColor: 'gray',
        style: {
           backgroundColor: 'white'

        }      }}
    >
      <Tab.Screen name="Tab 1" component={TabOne} />
      <Tab.Screen name="Tab 2" component={TabTwo} />
    </Tab.Navigator>
  );
}
function TabOne() {
  return (
    <View>
      <Text style={{ textAlign: 'center', marginTop: 300, fontWeight: 'bold'}}>
        This is the 1st screen
      </Text>
      <Text style={{ textAlign: 'center', fontWeight: '300', color: 'grey'}}>
        viewing the 1st tab
      </Text>
      <Text style={{ textAlign: 'center', fontWeight: '300', color: 'grey'}}>
        Translated: {i18n.t('feu')}
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

const MyTheme = {
  colors: {
    primary: 'rgb(0, 0, 0)',
    //background: 'rgb(242, 242, 242)',
    //text: 'rgb(0, 0, 0)',
    //border: 'rgb(199, 199, 204)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Screen 1">
        <Drawer.Screen name="Screen 1" component={ScreenOne} />
        <Drawer.Screen name="Screen 2" component={ScreenTwo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
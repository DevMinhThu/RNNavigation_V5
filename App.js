import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {CustomDrawerContent} from './src';
import {
  HomeScreen,
  HomeScreenDetail,
  SettingScreen,
  SettingScreenDetail,
} from './src/tab';
import {NotificationsScreen} from './src/drawer';
import {RegisterScreen, LoginScreen} from './src/auth';
import {IMAGE} from './src/constants/Image';

//Custom hiden header of Stack
const navOptionHandler = () => ({
  headerShown: false,
});

//Stack of HomeStack
const StackHome = createStackNavigator();

//Stack of Home
function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}

//Stack of SettingStack
const StackSetting = createStackNavigator();

//Stack of Setting
function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen
        name="Setting"
        component={SettingScreen}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="SettingDetail"
        component={SettingScreenDetail}
        options={navOptionHandler}
      />
    </StackSetting.Navigator>
  );
}

//Handle TabNavigator
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IMAGE.ICON_HOME_BLACK : IMAGE.ICON_HOME;
          } else if (route.name === 'Setting') {
            iconName = focused ? IMAGE.ICON_SETTING_BLACK : IMAGE.ICON_SETTING;
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{width: 20, height: 20, resizeMode: 'contain'}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

//Handle Drawer
function DrawerNavigator({navigation}) {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      // Custom slide menu
      drawerContent={() => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

//Handle Stack Login, register
const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Register"
          component={RegisterScreen}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

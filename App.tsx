/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import MakeList from './src/components/MakeList';
import {Image, StyleSheet, View} from 'react-native';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => (
              <View>
                <Image
                  style={{width: 100, height: 50}}
                  source={require('./src/images/FarmersLogo.png')}
                />
              </View>
            ),
            headerTintColor: 'black', //Set Header text color
            headerStyle: {
              backgroundColor: '#d8d8d8', //Set Header color
            },
            title: '',
          }}
        />
        <Stack.Screen
          name="MakeList"
          options={{title: ''}}
          component={MakeList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

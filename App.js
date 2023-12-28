import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DataView from './components/DataView';


export default function App() {
  const Stack = createStackNavigator();  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loan Data" component={DataView} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

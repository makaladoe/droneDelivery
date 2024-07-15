import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import Quiz from '../screens/quiz';
import Result from '../screens/result';
import MainOrders from '../Orders/mainOrders';
import Receipt from '../Orders/receipts';
import DisReceipt from '../screens/receiptScreen';
import ViewOrdersScreen from '../Orders/ViewOrder';
import LoginScreen from '../screens/Login';
import RegistrationScreen from '../screens/Register';
import RegisterScreen from '../Authenticate/RegisScreen';
import AuthScreen from '../Authenticate/LogisScreen';
import AppFinger from '../screens/finger';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AppFinger" component={AppFinger} />
	  <Stack.Screen name="Quiz" component={Quiz}   />
	  <Stack.Screen name="Result" component={Result} />
    <Stack.Screen name = "MainOrders" component={MainOrders}/>
    <Stack.Screen name = "Receipt" component={Receipt}/>
    <Stack.Screen name = "DisReceipt" component={DisReceipt}/>
    <Stack.Screen name="viewOrders" component={ViewOrdersScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    
    
    
      
   
     
    </Stack.Navigator>
  );
}

export default MyStack;
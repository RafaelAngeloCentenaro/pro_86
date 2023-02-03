import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register"
import * as firebase from "firebase";
import {firebaseConfig} from "./config";
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}else{
  firebase.app()
}
const Stack=createStackNavigator()
const StackNav=()=>{
  return(
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown:false,
        gestureEnabled:false
      }}
    >
      <Stack.Screen name="Login"component={LoginScreen}/>
      <Stack.Screen name="Register"component={Register}/>
      <Stack.Screen name="Dashboard"component={DrawerNavigator}/>
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <StackNav/>
    </NavigationContainer>
  );
}
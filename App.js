import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import NewShowScreen from './src/screens/NewShow'
import ShowsScreen from './src/screens/Shows'
import HomeScreen from './src/screens/Home'
import { View } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TabNav = createBottomTabNavigator();

const tabBarStyles = StyleSheet.create({
  viewStyle:{
    flexDirection: 'row',
    justifyContent: "space-around"
  }
})

const TabBar = ({navigation, state}) => {
  return(
    <View style={tabBarStyles.viewStyle}>
      <>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <AntDesign name="home" size={32} color={state.index===0?"blue":"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Shows")} >
          <Feather name="list" size={32} color={state.index===1?"red":"black"} />        
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("NewShow")} >
          <Ionicons name="md-add" size={32} color={state.index===2?"blue":"black"} />        
        </TouchableOpacity>
      </>
    </View>
  )
}
function App(){
  return(
    <NavigationContainer>
      <TabNav.Navigator tabBar={props=><TabBar {...props}/>}>
        <TabNav.Screen name={'Home'} component={HomeScreen} />
        <TabNav.Screen name={'Shows'} component={ShowsScreen} />
        <TabNav.Screen name={'NewShow'} component={NewShowScreen} />
      </TabNav.Navigator>
    </NavigationContainer>
  )
  
}

export default App;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import HeaderBg from '../shared/headerBg';


import Header from '../shared/header';

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (    
    <Navigator
        headerMode='float'        
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: { backgroundColor: '#ccc', height: 80 },
        }}
    >
        <Screen
            name='Home'
            component={Home}
            options={{
                headerTitle: () => <Header navigation={navigation} title='GameZone'/>,   
                headerBackground: () => <HeaderBg/>
                        
            }}
        />
        <Screen
            name='ReviewDetails'
            component={ReviewDetails}
            options={{
                title: 'Review Details'                     
            }}
        />
    </Navigator>
);

export default HomeStack;
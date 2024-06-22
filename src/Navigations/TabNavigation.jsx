import { Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/ProfileScreen/Profile';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import HomeNavigation from './HomeNavigation';
import Appointment from '../screens/AppointmentScreen/Appointment';



const Tab = createBottomTabNavigator();




const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen 
            name="Home" 
            component={HomeNavigation} 
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,fontSize:12,marginTop:-8}}>Home</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <Ionicons name="home" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen 
            name="Booking" 
            component={Appointment}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,fontSize:12,marginTop:-8}}>Appointment</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <AntDesign name="book" size={size} color={color} />
                )
            }}
            />
            <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color,fontSize:12,marginTop:-8}}>Profile</Text>
                ),
                tabBarIcon:({color,size})=>(
                    <Entypo name="user" size={size} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation
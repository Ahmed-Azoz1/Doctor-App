import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DoctorsListScreen from '../screens/DoctorsListScreen/DoctorsListScreen';
import Home from '../screens/HomeScreen/Home';
import DoctorDetails from '../screens/DoctorDetails/DoctorDetails';
import BookAppointment from '../screens/BookingScreen/BookAppointment';


const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="doctors-list-screen" component={DoctorsListScreen} />
            <Stack.Screen name="doctor-details" component={DoctorDetails} />
            <Stack.Screen name="book-appointment" component={BookAppointment} />
        </Stack.Navigator>
    )
}

export default HomeNavigation
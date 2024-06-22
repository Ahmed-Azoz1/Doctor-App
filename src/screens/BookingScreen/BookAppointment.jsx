import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AppointmentDoctor from '../../components/BookAppointment/AppointmentDoctor';
import ActionButton from '../../components/DoctorDetail/ActionButton'
import LineSection from '../../Shared/LineSection';
import Colors from '../../utils/Colors';
import BookingSection from '../../components/BookAppointment/BookingSection';


const BookAppointment = () => {

    const param = useRoute().params;

    return (
        <View style={{padding:20,backgroundColor:Colors.white}}>
            <AppointmentDoctor doctor={param?.doctor}/>
            <ActionButton/>
            <LineSection />
            <BookingSection doctor={param?.doctor} />
        </View>
    )
}

export default BookAppointment
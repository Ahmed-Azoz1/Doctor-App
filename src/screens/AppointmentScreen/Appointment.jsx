import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageHeader from '../../Shared/PageHeader'
import GlobalApi from '../../utils/GlobalApi'
import { useUser } from '@clerk/clerk-expo'
import AppointmentCardItem from '../../components/Appointment/AppointmentCardItem'
import Toast from 'react-native-toast-message'

const Appointment = () => {
    
    const {isLoaded,isSignedIn,user} = useUser();
    const [appointmentList,setAppointmentList] = useState([]);
    const allAppointments = async ()=>{
        await GlobalApi.getUserAppointment(user?.primaryEmailAddress?.emailAddress).then((res)=>{
            setAppointmentList(res?.data?.data)
        })
    }


    useEffect(()=>{
        if(user?.primaryEmailAddress.emailAddress){
            allAppointments();
        }
    },[user])

    const handleDeleteAppointment = async (id) => {
        try {
            await GlobalApi.deleteAppointment(id);
            setAppointmentList(appointmentList.filter(appointment => appointment.id !== id));
            showToast('success', 'Appointment Deleted', 'Your appointment has been successfully Deleted.');
        } catch (error) {
            console.error('Error deleting appointment:', error);
            showToast('error', 'Deleted Failed', 'There was an error Deleted your appointment.');
        }
    };

    const showToast = (type, text1, text2) => {
        Toast.show({
            type: type,
            text1: text1,
            text2: text2,
            position: 'bottom',
        });
    };

    return (
        <View style={{padding:15}}>
            <PageHeader title={'All Appointments'} backButton={false}/>

            <FlatList
            showsVerticalScrollIndicator={false}
            data={appointmentList}
            renderItem={({item})=>(
                <AppointmentCardItem appointment={item} onDelete={handleDeleteAppointment}/>
            )}
            />
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    )
}

export default Appointment
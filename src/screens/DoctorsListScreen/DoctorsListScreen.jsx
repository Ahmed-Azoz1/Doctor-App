import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import PageHeader from '../../Shared/PageHeader';
import DoctorTab from '../../components/Home/DoctorTab';
import DoctorList from '../../components/Home/DoctorList';
import GlobalApi from '../../utils/GlobalApi';
import Colors from '../../utils/Colors';

const DoctorsListScreen = () => {

    const param = useRoute().params;
    const [doctorList,setDoctorList] = useState([])

    const getDoctorByCategory=()=>{
        GlobalApi.getDoctorsByCategory(param?.categoryName).then((res)=>{
            setDoctorList(res?.data?.data)
        })
    }

    useEffect(()=>{
        getDoctorByCategory();
    },[])

    return (
        <View style={{padding:20}}>
            <PageHeader title={param?.categoryName}/>
            <DoctorTab />
            {
                !doctorList?.length ?
                <ActivityIndicator style={{marginTop:'50%'}} size={'large'} color={Colors.primary}/>
                :
                <DoctorList doctorList={doctorList}/>
            }
        </View>
    )
}

export default DoctorsListScreen
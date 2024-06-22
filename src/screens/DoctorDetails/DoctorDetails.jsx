import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import PageHeader from '../../Shared/PageHeader';
import DoctorInfo from '../../components/DoctorDetail/DoctorInfo';
import Colors from '../../utils/Colors';

const DoctorDetails = () => {

    const param = useRoute().params;
    const [doctor,setDoctor] =useState();
    useEffect(()=>{
        setDoctor(param?.doctor)
    },[])

    const navigation = useNavigation();


    return (
        <View style={{flex:1,backgroundColor:Colors.white}}>
            <View>
                <View style={{position:'absolute',zIndex:9,}}>
                    <PageHeader title={''} />
                </View>
                <View>
                    <Image style={{
                        width:'100%',
                        height:240,
                        resizeMode: 'stretch', 
                    }} source={{uri:doctor?.attributes?.image?.data?.attributes?.url}}/>
                </View>

                <View style={{marginTop:-20,backgroundColor:Colors.white,borderTopLeftRadius:20,borderTopRightRadius:20,
                    padding:20
                }}>
                    <DoctorInfo  doctor={doctor}/>
                </View>
            </View>

            <TouchableOpacity
                onPress={()=>navigation.navigate('book-appointment',{
                    doctor:doctor
                })}
                style={{
                    padding:13,
                    backgroundColor:Colors.primary,
                    margin:10,
                    borderRadius:99,
                    left:0,
                    right:0,
                    marginBottom:12,
                    zIndex:16,
                    marginTop:60
                }}
            >
                <Text style={{
                    color:Colors.white,
                    textAlign:'center',
                    fontFamily:'roboto-medium',
                    fontSize:18
                }}>
                    Book Appointment
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default DoctorDetails
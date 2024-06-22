import { View, Text, Image } from 'react-native'
import React from 'react'
import PageHeader from '../../Shared/PageHeader'
import Colors from '../../utils/Colors';
import { EvilIcons } from '@expo/vector-icons';
import LineSection from '../../Shared/LineSection';

const AppointmentDoctor = ({doctor}) => {
    return (
        <View>
            <PageHeader title={'Book Appointment'}/>

            <View style={{marginTop:10,display:'flex',flexDirection:'row',gap:15,alignItems:'center'}}>
                <Image 
                style={{width:120,height:120,borderRadius:99}}
                source={{uri:doctor?.attributes.image.data.attributes?.url}}/>

                <View>
                    <Text
                        style={{
                            fontSize:20,
                            fontFamily:'roboto-medium',
                            marginBottom:10
                        }}
                    >{doctor?.attributes?.name}</Text>

                    <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center'}}>
                        <EvilIcons name="location" size={24} color={Colors.primary} />
                        <Text style={{fontSize:18,width:'70%',fontFamily:'roboto',color:Colors.gray}}>{doctor?.attributes?.address}</Text>
                    </View>
                </View>

            </View>

            <LineSection/>

        </View>
    )
}

export default AppointmentDoctor
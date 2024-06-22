import { View, Text } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import { EvilIcons } from '@expo/vector-icons';
import ActionButton from './ActionButton';
import SubHeading from '../Home/SubHeading'
import LineSection from '../../Shared/LineSection';

const DoctorInfo = ({doctor}) => {
    return (
        <View style={{backgroundColor:Colors.white}}>
            <Text style={{fontSize:24,fontFamily:'roboto-medium'}}>Dr {doctor?.attributes?.name}</Text>

            <LineSection />

            <View style={{marginBottom:10}}>
                <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center'}}>
                    <EvilIcons name="location" size={24} color={Colors.primary} />
                    <Text style={{fontSize:18,fontFamily:'roboto',color:Colors.gray}}>{doctor?.attributes?.address}</Text>
                </View>
            </View>

            <View>
                <View style={{display:'flex',flexDirection:'row',gap:5,alignItems:'center'}}>
                    <EvilIcons name="clock" size={24} color={Colors.primary} />
                    <Text style={{fontSize:18,fontFamily:'roboto',color:Colors.gray,alignItems:'center'}}>Sat Thu | 11AM - 8PM</Text>
                    {/* <Text style={{fontSize:16,fontFamily:'roboto',color:Colors.gray}}>{doctor?.attributes?.endTime}</Text> */}
                </View>
            </View>

            <View style={{borderBottomWidth:1,borderColor:Colors.light_gray,margin:5,marginTop:10}}>
            </View>

            <ActionButton />

            <LineSection />

            <SubHeading subTitle={'About'} seeAll={false} />
            <Text>{doctor?.attributes?.bio}</Text>

        </View>
    )
}

export default DoctorInfo
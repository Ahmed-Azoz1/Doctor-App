import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'

const DoctorItem = ({doctor}) => {
    return (
        <View style={{width:200,borderRadius:10,marginRight:15,borderWidth:1,borderColor:Colors.light_gray}}>
            <Image
            style={{width:'100%',height:110,borderTopLeftRadius:10,borderTopRightRadius:10,resizeMode: 'stretch'}}
            source={{uri:doctor?.attributes?.image?.data?.attributes?.url}} />
            <View style={{padding:14,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'roboto-medium',fontSize:16}}>{doctor?.attributes?.name}</Text>
                <Text style={{fontFamily:'roboto',fontSize:14,color:Colors.gray}}>{doctor?.attributes?.category?.data?.attributes?.name}</Text>
            </View>
        </View>
    )
}

export default DoctorItem
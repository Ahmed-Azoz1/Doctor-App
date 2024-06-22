import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PageHeader = ({title,backButton=true}) => {

    const navigation = useNavigation();

    return (
        <View style={{display:'flex',flexDirection:'row',alignItems:"center",gap:5,marginBottom:5}}>
            {
                backButton == true ? 
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
                </TouchableOpacity>
                :null
            }
            <Text style={{fontSize:25,fontFamily:'roboto-medium'}}>{title}</Text>
        </View>
    )
}

export default PageHeader
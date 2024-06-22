import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utils/Colors'

const DoctorTab = () => {

    const [active,setActive] =useState(0)


    return (
        <View style={{marginTop:10}}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity style={[active==0?styles.activeTab:styles.inActiveTab]} onPress={()=>setActive(0)}>
                    <Text style={[active==0?styles.activeText:styles.inActiveText]}>Doctor</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    activeText:{
        color:Colors.primary,
        textAlign:'center',
        fontSize:18,
        fontFamily:'roboto',
    },
    inActiveText:{
        color:Colors.gray,
        textAlign:'center',
        fontSize:18,
        fontFamily:'roboto',
    },
    activeTab:{
        borderBottomWidth:2,
        borderBottomColor:Colors.primary,
        padding:3,
    },
    inActiveTab:{
        borderBottomWidth:1,
        borderBottomColor:Colors.gray,
        padding:3,
    }
})

export default DoctorTab
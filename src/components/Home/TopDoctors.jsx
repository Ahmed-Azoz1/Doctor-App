import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import GlobalApi from '../../utils/GlobalApi'
import DoctorItem from './DoctorItem'
import { useNavigation } from '@react-navigation/native'

const TopDoctors = () => {

    const [topDoctors,setTopDoctors] = useState([])
    const navigation = useNavigation();

    const getTopDoctors=()=>{
        GlobalApi.getTopDoctors().then((res)=>{
            setTopDoctors(res.data.data)
        })
    }

    useEffect(()=>{
        getTopDoctors();
    },[])

    return topDoctors&&(
        <View style={styles.doctors}>
            <SubHeading subTitle={'Top Doctors'}/>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={topDoctors}
                renderItem={({item,index})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('doctor-details',{
                        doctor:item
                    })}>
                        <DoctorItem  doctor={item}/>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    doctors: {
        marginTop:15,
        paddingLeft:10,
        paddingRight:10
    },
});

export default TopDoctors
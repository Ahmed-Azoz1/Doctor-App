import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubHeading from './SubHeading'
import GlobalApi from '../../utils/GlobalApi'
import DoctorItem from './DoctorItem'

const TopDoctors = () => {

    const [topDoctors,setTopDoctors] = useState([])

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
                    <DoctorItem  doctor={item}/>
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
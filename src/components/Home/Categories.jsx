import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import Colors from '../../utils/Colors'
import SubHeading from './SubHeading'
import { useNavigation } from '@react-navigation/native'

const Categories = () => {

    const [categoryList,setCategoryList] = useState([])
    const navigation = useNavigation();


    const getCategories = ()=>{
        GlobalApi.getCategories().then((res)=>{
            setCategoryList(res?.data?.data)
        })
    }

    useEffect(()=>{
        getCategories();
    },[])
    if(!categoryList){
        return null
    }

    return (
        <View style={styles.category}>
            <SubHeading subTitle="Doctor Sepciality"/>

            <FlatList
                data={categoryList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index})=>(
                    <TouchableOpacity
                    onPress={()=>navigation.navigate('doctors-list-screen',{
                        // api
                        categoryName:item?.attributes?.name
                    })}
                    style={{alignItems:'center'}}>
                        <View style={{backgroundColor:Colors.secondary,padding:15,borderRadius:99,marginRight:25}}>
                            <Image source={{uri:item.attributes?.icon?.data?.attributes?.url}}
                                style={{
                                    width:30,
                                    height:30,
                                    borderRadius:10,
                                    margin:2,
                                }}
                            />
                        </View>
                        <Text style={{alignItems:'center',marginRight:25}}>{item?.attributes?.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        marginTop:10,
        paddingLeft:10,
        paddingRight:10
    },
});

export default Categories
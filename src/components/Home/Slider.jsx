import { View, Text, FlatList, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'

const Slider = () => {

    const [sliderList,setSliderList] = useState()

    // const sliderList = [
    //     {
    //         id:1,
    //         name:'Slider 1',
    //         imageUrl:'https://picsum.photos/id/222/200/300'
    //     },
    //     {
    //         id:2,
    //         name:'Slider 2',
    //         imageUrl:'https://picsum.photos/id/217/200/300'
    //     }
    // ]

    useEffect(()=>{
        getSlider();
    },[])

    const getSlider = ()=>{
        GlobalApi.getSlider().then((res)=>{
            setSliderList(res.data.data)
        })
    }


    return (
        <View style={{marginTop:10,padding:10}}>
            <FlatList
                data={sliderList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                    <Image source={{uri:item.attributes?.image?.data?.attributes?.url}}
                        style={{
                            width:Dimensions.get('screen').width*0.9,
                            height:170,
                            borderRadius:10,
                            margin:2,
                            resizeMode: 'stretch'
                        }}
                    />
                )}
            />
        </View>
    )
}

export default Slider
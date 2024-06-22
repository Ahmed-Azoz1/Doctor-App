import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import { Ionicons } from '@expo/vector-icons';

const ActionButton = () => {

    const actionButtonList=[
        {
            id:1,
            name:'Website',
            icon:'earth'
        },
        {
            id:2,
            name:'Email',
            icon:'chatbubble-ellipses'
        },
        {
            id:3,
            name:'Phone',
            icon:'call-outline'
        }
    ]


    return (
        <View style={{marginTop:16}}>
            <FlatList 
            data={actionButtonList}
            columnWrapperStyle={{
                flex:1,
                justifyContent:'space-between'
            }}
            numColumns={4}
            renderItem={({item})=>(
                <TouchableOpacity style={{alignItems:'center'}}>
                    <View style={{
                        backgroundColor:Colors.secondary,
                        padding:13,
                        borderRadius:99,
                        alignItems:'center',
                        width:55
                    }}>
                        <Ionicons name={item.icon} size={24} color={Colors.primary} />
                    </View>
                    <Text style={{alignItems:'center',fontFamily:'roboto-medium',marginTop:4}}>{item.name}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    )
}

export default ActionButton
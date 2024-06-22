import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../utils/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



const Header = () => {

    const [searchInput,setSearchInput] = useState();
    const {user,isLoading} = useUser();

    const navigation = useNavigation();

    return user&& (
        <View style={styles.container}>
            {/* Profile User */}
            <View style={styles.profileMain}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <View style={styles.profileContainer}>
                        <Image style={styles.userImage} source={{uri:user?.imageUrl}}/>

                        <View>
                            <Text style={{color:Colors.white,fontFamily:'roboto'}}>Welcome</Text>
                            <Text style={styles.userName}>{user?.fullName}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <Ionicons name="notifications-outline" size={26} color={Colors.white} />
            </View>

            {/* Search Bar Sections */}
            <View style={styles.searchContainer}>
                <TextInput onSubmitEditing={()=>setSearchText(searchInput)} onChangeText={(value)=>setSearchInput(value)} style={styles.searchInput} placeholder='Search'></TextInput>
                <FontAwesome style={styles.searchBtn} name="search" size={24} color={Colors.primary} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:40,
        backgroundColor:Colors.primary,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25,
    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99,
    },
    profileMain:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:12
    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:14
    },
    userName:{
        color:Colors.white,
        fontSize:20,
        fontWeight:'600',
        fontFamily:'roboto-bold'
    },
    // Search
    searchContainer:{
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:12
    },
    searchInput:{
        padding:8,
        paddingHorizontal:16,
        backgroundColor:Colors.white,
        borderRadius:8,
        width:'85%',
        fontSize:16,
        fontFamily:'roboto'
    },
    searchBtn:{
        backgroundColor:Colors.white,
        padding:10,
        borderRadius:8,
    },
})

export default Header
import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors'
import SignInWithOAuth from '../../components/SignInWithOAuth'


const Login = () => {

    return (
        <View style={{alignItems:'center'}}>
            <Image 
            style={styles.loginImage}
            source={require('../../../assets/login.jpg')}/>

            <View style={styles.subContainer}>
                <Text style={styles.title}>
                    Let's <Text style={styles.subTitle}>Find Professional Doctor</Text> for you
                </Text>
                <Text style={styles.bio}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, consectetur?
                </Text>

                <SignInWithOAuth/>

            </View>
        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:450,
        marginTop:70,
        borderWidth:4,
        borderColor:Colors.black,
        borderRadius:15,
    },
    subContainer:{
        width:'100%',
        backgroundColor:Colors.primary,
        height:'70%',
        marginTop:-20,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        padding:20
    },
    title:{
        fontSize:27,
        color:Colors.white,
        textAlign:'center'
    },
    subTitle:{
        fontWeight:'bold'
    },
    bio:{
        fontSize:17,
        color:Colors.white,
        textAlign:'center',
        marginTop:20
    },
    button:{
        padding:15,
        backgroundColor:Colors.white,
        borderRadius:99,
        marginTop:50
    },
    login:{
        textAlign:'center',
        fontSize:20,
        color:Colors.primary,
    }
})
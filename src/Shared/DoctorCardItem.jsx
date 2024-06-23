import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const DoctorCardItem = ({doctor}) => {


    const navigation =useNavigation();

    return (

        <View style={styles.card}>
            <Image source={{uri:doctor?.attributes?.image?.data?.attributes?.url}} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{doctor?.attributes?.name}</Text>
                <Text style={styles.specialty}>{doctor?.attributes?.category?.data?.attributes?.name}</Text>
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star" size={16} color="gold" />
                    <Text style={styles.rating}>4.5</Text>
                    <Text style={styles.reviews}>(5 Reviews)</Text>
                </View>
            <TouchableOpacity
                onPress={()=>navigation.navigate('book-appointment',{
                    doctor:doctor
                })}
            style={styles.button}>
                <Text style={styles.buttonText}>Make Appointment</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 10,
        resizeMode: 'stretch'
    },
    infoContainer: {
        marginLeft: 10,
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    specialty: {
        fontSize: 16,
        color: 'gray',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    rating: {
        marginLeft: 5,
        fontSize: 14,
    },
    reviews: {
        marginLeft: 5,
        fontSize: 14,
        color: 'gray',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#add8e6',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default DoctorCardItem
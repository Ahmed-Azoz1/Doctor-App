import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../../utils/Colors'
import SubHeading from '../Home/SubHeading'
import moment from 'moment'
import { useUser } from '@clerk/clerk-expo'
import GlobalApi from '../../utils/GlobalApi'
import Toast from 'react-native-toast-message';

const BookingSection = ({doctor}) => {

    const {isLoaded,isSignedIn,user} = useUser();

    const [nextWeek,setNextWeek] = useState([]);
    const [selectedDate,setSelectedDate] = useState();

    const [timeList,setTimeList] = useState([]);
    const [selectedTime,setSelectedTime] = useState();

    const [notes,setNotes] = useState();

    const getDay = ()=>{
        const today=moment();
        const nextSevenDays=[];
        for(let i=0;i<7;i++) {
            const date=moment().add(i,'days');
            nextSevenDays.push({
                date:date, 
                day: date.format('ddd'),  //يوم
                formmatedDate:date.format('Do MMM') // شهر
            })
        }
        setNextWeek(nextSevenDays)
    }

    const getTime= ()=>{ 
        const timeList=[];
        for (let i=8;i<=12;i++) { 
            timeList.push({ 
                time:i+':00 AM'
            })  
            timeList.push({
                time:i+':30 AM'
            }) 
        } 

        for (let i=1;i<=6;i++) { 
            timeList.push({ 
                time:i+':00 PM'
            })  
            timeList.push({
                time:i+':30 PM'
            }) 
        } 
        setTimeList(timeList)
    }


    const showToast = (type, text1, text2) => {
        Toast.show({
            type: type,
            text1: text1,
            text2: text2,
            position: 'bottom',
        });
    };

    const bookAppointment = ()=>{
        // setLoader(true);
        const data = {
            data:{
                userName:user.fullName,
                date:selectedDate,
                time:selectedTime,
                email:user.primaryEmailAddress.emailAddress,
                doctors:doctor?.id,
                Note:notes
            }
        }

        GlobalApi.makeAppointment(data)
            .then((res) => {
            console.log(res);
            showToast('success', 'Appointment Booked', 'Your appointment has been successfully booked.');
            })
            .catch((error) => {
            console.error(error);
            showToast('error', 'Booking Failed', 'There was an error booking your appointment.');
        });
    }


    useEffect(()=>{
        getDay();
        getTime();
    },[])

    return (
        <View>
            <Text style={{fontSize:18,color:Colors.gray}}>Book Appointment</Text>
            <SubHeading subTitle={'Day'} seeAll={false}/>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={nextWeek}
                renderItem={({item})=>(
                    <TouchableOpacity
                        onPress={()=>setSelectedDate(item.date)}
                        style={[
                            styles.dayButton,
                            selectedDate==item.date?
                            {backgroundColor:Colors.primary}:
                            null
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    fontFamily:'roboto',
                                },
                                selectedDate==item.date?
                                {color:Colors.white}:
                                null
                            ]}
                        >{item.day}</Text>
                        <Text
                        style={[{
                            fontFamily:'roboto-medium',
                            fontSize:16},
                            selectedDate==item.date?
                            {color:Colors.white}:
                            null
                        ]}
                        >{item.formmatedDate}</Text>
                    </TouchableOpacity>
                )}
            />

            <SubHeading subTitle={'Time'} seeAll={false}/>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={timeList}
                renderItem={({item})=>(
                    <TouchableOpacity
                        onPress={()=>setSelectedTime(item.time)}
                        style={[
                            styles.dayButton,
                            {
                                paddingVertical:12,
                            },
                            selectedTime==item.time?
                            {backgroundColor:Colors.primary}:
                            null
                        ]}
                        >
                        
                        <Text
                        style={[{
                            fontFamily:'roboto-medium',
                            fontSize:16},
                            selectedTime==item.time?
                            {color:Colors.white}:
                            null
                        ]}
                        >{item.time}</Text>
                    </TouchableOpacity>
                )}
            />

            <SubHeading subTitle={'Note'} seeAll={false}/>
            
            <TextInput numberOfLines={5}
                onChangeText={(value)=>setNotes(value)}
                style={{
                    backgroundColor:Colors.light_gray,
                    padding:10,
                    borderColor:Colors.secondary,
                    borderWidth:1,
                    borderRadius:10,
                    textAlignVertical:'top'
                }}
                placeholder='Write Notes Here'
            />

            <TouchableOpacity
                onPress={()=>bookAppointment()}
                style={{
                    padding:13,
                    backgroundColor:Colors.primary,
                    margin:10,
                    borderRadius:99,
                    left:0,
                    right:0,
                    marginBottom:12,
                    zIndex:30
                }}
            >
                <Text style={{
                    color:Colors.white,
                    textAlign:'center',
                    fontFamily:'roboto-medium',
                    fontSize:18
                }}>
                    Make Appointment
                </Text>
            </TouchableOpacity>

            <Toast ref={(ref) => Toast.setRef(ref)} />

        </View>
    )
}

const styles = StyleSheet.create({
    dayButton:{
        borderWidth:1,
        padding:5,
        paddingHorizontal:20,
        marginRight:10,
        borderColor:Colors.gray,
        borderRadius:99,
        alignItems:'center'
    }
})

export default BookingSection
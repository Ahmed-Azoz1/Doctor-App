import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../utils/Colors';

const SubHeading = ({subTitle,seeAll=true}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.doctorText}>{subTitle}</Text>
            {
                seeAll ? <Text style={{fontFamily:'roboto',color:Colors.primary}}>see All</Text> :null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:12,
        marginTop:15
    },
    doctorText:{
        fontSize:20,
        fontFamily:'roboto-medium',
    },
});

export default SubHeading
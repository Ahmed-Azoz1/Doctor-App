import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Home/Header'
import Slider from '../../components/Home/Slider'
import Categories from '../../components/Home/Categories'
import TopDoctors from '../../components/Home/TopDoctors'

const Home = () => {
    return (
        <ScrollView style={styles.homecontainer}>
            <Header />
            <Slider />
            <Categories />
            <TopDoctors />
            <TopDoctors />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homecontainer: {
        // paddingRight:10,
        // paddingLeft:10,
    },
});


export default Home
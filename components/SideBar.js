import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'
import { createDrawerNavigator,DrawerNavigatorItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'

export default SideBar = props => (
    <ScrollView>
        <ImageBackground source={require("../assets/Scenery1.png")} style={{ width: undefined, padding: 16, paddingTop: 30 }}>

            <Image source={require("../assets/my_account_circle_152px.png")} style={styles.profile} />
            <Text style={styles.name}>Muhammad Yusup</Text>

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.followers}>500 Followers</Text>
                <Ionicons name="md-people" size={16} color="rgba(255,255,255,0.8)" />
            </View>
        </ImageBackground>

        <View style={styles.container}>
            <DrawerNavigatorItems {...props}/>
        </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#fff'
    },
    name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8
    },
    followers: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 13,
        marginRight: 4
    }
})
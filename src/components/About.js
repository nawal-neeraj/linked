import React, {useEffect} from "react";
import {Label, Text, View } from 'native-base';
import { StyleSheet } from 'react-native';

export const About = ({ aboutdata }) => {
    const about = aboutdata.About
    // useEffect(() => {
    //     console.log(about)
    // },[])

    return (
        <View>
            <View style={{ paddingTop: 1 }}>
                <Label style={{ fontWeight: "bold" }}>Personal:</Label>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.8 }}>
                    <Label>Name:</Label>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.textStyle}>{about.name === undefined ? <Text> "...loading"</Text>: about.name}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 0.8 }}>
                    <Label>Experiance:</Label>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.textStyle}>{about.Experience === undefined ? <Text> "...loading"</Text>: about.Experience} years</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#F5F5F5',
    },
    pdiv: {
        marginLeft: 5,
    },
    textStyle:{
        justifyContent: 'center', alignItems: 'center'
    }
});
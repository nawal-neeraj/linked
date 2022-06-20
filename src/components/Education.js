import React,{useEffect} from "react";
import {Label, Text, View, Card } from 'native-base';
import { StyleSheet } from 'react-native';

export const Education = ({data}) => {
    const about = data.Education
    // useEffect(() => {
    //     console.log(about)
    // },[])

    return (
        <View>
            <View style={{ paddingTop: 2 }}>
                <Label style={{ fontWeight: "bold" }}>Education:</Label>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 4 }}>
                <View style={{ flex: 0.8 }}>
                    <Label>Secondery:</Label>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.textStyle}>{about.Secondary === undefined ? <Text> "...loading"</Text> : about.Diploma}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 4 }}>
                <View style={{ flex: 0.8 }}>
                    <Label>Diploma:</Label>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.textStyle}>{about.Diploma === undefined ? <Text> "...loading"</Text>: about.Diploma}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", paddingBottom: 4 }}>
                <View style={{ flex: 0.8 }}>
                    <Label>Engineering:</Label>
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.textStyle}>{about.Btech === undefined ? <Text> "...loading"</Text>: about.Btech}</Text>
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
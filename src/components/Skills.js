import React, { useEffect } from "react";
import { Label, Text, View, Card } from 'native-base';
import { StyleSheet } from 'react-native';

export const Skills = ({ skillsData }) => {
    const skillsArr = skillsData.skills

    return (

        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
            {skillsArr.map((item) => (
                <View style={{ padding: 5 }}>
                    <Text>{item.tech}</Text>
                </View>
            ))}
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
    textStyle: {
        justifyContent: 'center', alignItems: 'center'
    }
});

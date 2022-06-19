import React, { useEffect } from "react";
import { Label, Text, View, Card } from 'native-base';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

export const Skills = ({ skillsData }) => {
    useEffect(() => {
        console.log(skillsData.skills)
    }, [])
    const skillsArr = skillsData.skills

    return (
        <View>
            <View style={{ paddingTop: 2 }}>
                <Label style={{ fontWeight: "bold" }}>Skills:</Label>
            </View>
            <View  >
                <FlatList
                    data={skillsArr}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            alignItems: 'flex-start'
                        }} >
                            <Text style={{ flexShrink: 1 }}>{item.tech}</Text>
                        </View>
                    )}
                />
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
    textStyle: {
        justifyContent: 'center', alignItems: 'center'
    }
});
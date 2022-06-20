import React, { useState, useEffect } from "react";
import { Container, Card, View, Label, Left, Button, Icon, Body, Title } from 'native-base';
import { ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

import { AppHeader } from '../components/AppHeader'
import { Education } from "../components/Education";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import {dataValue} from '../mock'

export const Profile = ({navigation}) => {
    const [data, setData] = useState("")
    const [showDiv, setShowDiv] = useState(false)
    const {openDrawer} = navigation
    useEffect(() => {
        getDate()
    },[])

    const getDate = () => {
        let data = dataValue
        let dataVal = data.data
        if(dataVal === undefined){
            setShowDiv(false)
        }else{
            setShowDiv(true)
            setData(dataVal)
        }
    }

    return (
            <Container style={styles.container}>
            <AppHeader>
                <Left>
                    <Button onPress={() =>openDrawer()} transparent>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Profile</Title>
                </Body>
            </AppHeader>
            {!showDiv && (
            <View>
                <ActivityIndicator color='bluw' />
            </View>
            )}
            {showDiv && (
            <View style={{padding:10}}>
                <Card style={{ padding: 10 }}>
                    <About aboutdata={data} />
                </Card>
                <Card style={{ padding: 10 }}>
                    <Education data={data} />
                </Card>
                <Card style={{ padding: 10, elevation: 0 }}>
                    <View style={{ paddingTop: 2 }}>
                        <Label style={{ fontWeight: "bold" }}>Skills:</Label>
                    </View>
                    <Skills skillsData={data} />
                </Card>
            </View>
            )}
            </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
    }
});
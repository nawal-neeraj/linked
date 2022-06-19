import React, {useState} from "react";
import { Container, Text, Left, Button, Icon, Body, Title } from 'native-base';
import { AppHeader } from '../components/AppHeader'
import { StyleSheet } from 'react-native';


export const Home = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <Container style={styles.container}>
            <Text style={toggle ? {color:"blue" }:{ color: "red"}}>Hello</Text>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F5F5F5',
      },
    pdiv:{
        marginLeft: 5
    }
});
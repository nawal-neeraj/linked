import React, { useState, useEffect } from "react";
import { Container, Card } from 'native-base';
import { StyleSheet } from 'react-native';
import axios from 'axios';
import { Education } from "../components/Education";
import { About } from "../components/About";
import { Skills } from "../components/Skills";

export const Profile = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        getDate()
    }, [])

    const getDate = async () => {
        let data = await axios.get('http://10.0.2.2:3000/data')
        let dataVal = data.data
        console.log(dataVal)
        setData(dataVal)
    }

    return (
        <Container style={styles.container}>
            <Card style={{ padding: 10 }}>
                <About aboutdata={data} />
            </Card>
            <Card style={{ padding: 10 }}>
                <Education data={data} />
            </Card>
            <Card style={{ padding: 10, elevation:0 }}>
                <Skills skillsData={data}/>
            </Card>
        </Container>
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
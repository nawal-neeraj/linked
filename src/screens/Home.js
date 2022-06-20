import React, { useEffect, useState } from "react";
import { Container, Left, Button, Icon, Body, Title, View, Right, Text, Card } from 'native-base';
import { AppHeader } from '../components/AppHeader'
import { StyleSheet, Dimensions } from 'react-native';
import { AppTheme } from "../Themes/AppThemes";
import { PostModal } from "../modal/Modals";
import { ShowPost } from "../components/ShowPosts";
import { getItems, setItems } from "../utils/AsyncStorage";
import AsyncStorage from '@react-native-async-storage/async-storage';

const window = Dimensions.get('window').height;

export const Home = ({ navigation }) => {
    const { openDrawer } = navigation;
    const [open, setOpen] = useState(false);
    const [item, setItem] = useState([])

    useEffect(() => {
        getPostValue()
    }, [])

    const getPostValue = async () => {
        const getPosts = await AsyncStorage.getItem('token')
        const value = JSON.parse(getPosts)
        setItem(value)
    }

    const openModal = () => {
        setOpen(!open)
    }

    return (
        <View>
            <AppHeader>
                <Left>
                    <Button onPress={openDrawer} transparent>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Home</Title>
                </Body>
                <Right>
                    <Button style={{ backgroundColor: "#F5F5F5" }} onPress={() => openModal()}>
                        <Title style={{ color: AppTheme.primary[900] }}>Open Modal</Title>
                    </Button>
                </Right>
            </AppHeader>
            <Container style={styles.container}>
                <View height={0.9 * window}>
                    <ShowPost value={item} />
                </View>
                <PostModal getVal={getPostValue} dataSet={open} openMod={openModal} />
            </Container>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: '#F5F5F5',
    },
});
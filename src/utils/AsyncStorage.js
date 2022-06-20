import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItems = async(value) => {
    return AsyncStorage.setItem('token', JSON.stringify(value));
}



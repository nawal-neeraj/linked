import React,{useState, useEffect} from "react";
import { Text, Button,View, Textarea } from 'native-base';
import { AppTheme } from "../Themes/AppThemes";
import Modal from "react-native-modal";
import { setItems } from "../utils/AsyncStorage";

export const PostModal = ({dataSet, openMod, getVal}) => {
    const [post, setPost] = useState("")
    const [vpost, setVpost] = useState([])
    
    useEffect(() => {
        setItemsValue()
        getVal()
    },[vpost])

    const setItemsValue = async() => {
        const item = setItems(vpost)
    }

    const handlePost = (e) => {
        setPost(e)
    }

    const handleSubmit = () => {
       setVpost([...vpost, {"id":vpost.length, "Name": "Nawal", "post":post}])
       openMod()
       setPost("")
    }

    return (
        <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={dataSet}
            onBackdropPress={() => openMod()}
        >
            <View
                style={{
                    height: '35%',
                    width: '100%',
                    marginTop: 'auto',
                    backgroundColor: 'white',
                    borderColor: AppTheme.primary[400],
                    borderRadius: 20
                }}>
                <View style={{ padding: 10 }}>
                    <View style={{ borderWidth: 1, height: '90%', borderRadius: 10, borderColor: AppTheme.primary[100] }}>
                        <Textarea placeholder="Write to post..." value={post} onChangeText={(e) => handlePost(e)} style={{ borderRadius: 1, borderColor: AppTheme.primary[100] }} rowSpan={5}></Textarea>
                    </View>
                </View>
                <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
                    <Button onPress={() => handleSubmit()} style={{ width: '100%' }}>
                        <Text style={{ marginLeft: 'auto', marginRight: 'auto', fontWeight: 'bold' }}>Post</Text>
                    </Button>
                </View>
            </View>
        </Modal>
        </View>
    )
}
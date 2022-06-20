import React from "react";
import { View, Text, Title, Card } from 'native-base';
import { SafeAreaView } from 'react-native';
import { FlatList } from "react-native-gesture-handler";


export const ShowPost = ({ value }) => {
    const values = [value]
    return (
        <SafeAreaView style={{ padding: 10, flex:1 }}>
            <FlatList
                data={value}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card style={{ height: 100, }}>
                        <View style={{ padding: 10 }}>
                            <View>
                                <Title style={{ color: 'black', fontWeight: 'bold' }}>
                                    {item.Name}
                                </Title>
                            </View>
                            <View>
                                <Text numberOfLines={ 2 }>
                                    {item.post}
                                </Text>
                            </View>
                        </View>
                    </Card>
                )}
            />
        </SafeAreaView>
    )
}

// {value.map((data) => (
//     <Card key={data.id} style={{ height: 100, }}>
//         <View style={{ padding: 10 }}>
//             <View>
//                 <Title style={{ color: 'black', fontWeight: 'bold' }}>
//                     {data.Name}
//                 </Title>
//             </View>
//             <View>
//                 <Text>
//                     {data.post}
//                 </Text>
//             </View>
//         </View>
//     </Card>
// ))}
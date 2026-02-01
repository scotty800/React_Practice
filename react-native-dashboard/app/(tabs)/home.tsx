import {View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

export default function HomeScreen() {
    const { email } = useLocalSearchParams<{email : string}>();

    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <Text>Home Screen</Text>
            <Text>Email connecté : {email}</Text>
        </View>
    )
}
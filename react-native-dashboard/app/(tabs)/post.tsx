import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

export default function PostScreen() {
    const { title, body } = useLocalSearchParams<{
        title: string;
        body: string;
    }>();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>{body}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 16
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12
    }
})
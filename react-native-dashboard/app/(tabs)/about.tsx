import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>À propos</Text>
            <Text>Cette application est un exemple avec Expo Router et React Native TSX.</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 16
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12
    },
})
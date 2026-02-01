import { ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';

const posts = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  title: `Post numéro ${i + 1}`,
  body: `Ceci est le contenu du post numéro ${i + 1}`,
}));

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {posts.map((post) => (
          <TouchableOpacity key={post.id} style={styles.post}>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.body}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  scrollContainer: {
    padding: 16,
  },
  post: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
});
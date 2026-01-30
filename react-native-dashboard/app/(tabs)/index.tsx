import { View, Text, StyleSheet, Pressable, FlatList  } from 'react-native';
import { useState } from 'react';

const posts = [
  { id: '1', title: 'First Post' },
  { id: '2', title: 'Second Post' },
  { id: '3', title: 'Third Post' },
  { id: '4', title: 'Fourth Post' },
  { id: '5', title: 'Fifth Post' },
  { id: '6', title: 'Sixth Post' },
]

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Text style={styles.text}>Count: {count}</Text>

      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>

      <Text style={styles.header}>Liste des Posts</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.postText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  header: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  post: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  postText: {
    fontSize: 18,
  }
});


import { Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "./hooks/useFetch";
import { router } from "expo-router";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function HomeScreen() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts?.slice(0, 20)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.post}
            onPress={() =>
              router.push({
                pathname: "/post",
                params: {
                  id: item.id.toString(),
                  title: item.title,
                  body: item.body,
                },
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2}>{item.body}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 16
    },
    post: {
        backgroundColor: 'white', 
        padding: 12, 
        borderRadius: 12, 
        marginBottom: 12
    },
    title: {
        fontWeight: 'bold', marginBottom: 4
    },
});
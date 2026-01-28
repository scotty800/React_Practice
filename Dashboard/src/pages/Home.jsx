import { useFetch } from "../hooks/useFetch";
import { getPosts } from "../services/api";
import HomeView from "./HomeView";

function Home() {
  const { data, loading, error } = useFetch(getPosts, []);

  return (
    <HomeView
      posts={data}
      loading={loading}
      error={error}
    />
  );
}

export default Home;

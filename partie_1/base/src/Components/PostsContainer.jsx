import useFetch from "./useFetch";
import PostsView from "./PostsView";

function PostsContainer() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error } = useFetch(url);

  return (
    <PostsView
      data={data}
      loading={loading}
      error={error}
    />
  );
}

export default PostsContainer;

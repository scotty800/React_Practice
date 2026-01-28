import PostCard from "../components/PostCard";

function HomeView({ posts, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {posts.slice(0, 10).map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default HomeView;

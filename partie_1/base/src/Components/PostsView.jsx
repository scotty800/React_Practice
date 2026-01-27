function PostsView({ data, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {data.map(p => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}

export default PostsView;

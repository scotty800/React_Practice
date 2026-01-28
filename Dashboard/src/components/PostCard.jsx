function PostCard({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 100)}...</p>
    </div>
  );
}

export default PostCard;

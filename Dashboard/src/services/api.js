// services/api.js
const API_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = () =>
  fetch(`${API_URL}/posts`).then(res => {
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
  });

export const getPostById = (id) =>
  fetch(`${API_URL}/posts/${id}`).then(res => {
    if (!res.ok) throw new Error("Post not found");
    return res.json();
  });

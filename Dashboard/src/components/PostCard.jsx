import React from 'react';
import { useFetch } from '../hooks/useFetch';

export function PostCard({ post }) {
    return (<div className="post-card">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </div>);
}

import React, { useState, useEffect } from 'react';
import { getPosts } from '../api/post';
import PostCard from './PostCard';

const POST_LIMIT = 9;

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { error, posts: fetchedPosts } = await getPosts(0, POST_LIMIT);

      if (error) {
        console.error(error);
      } else {
        setPosts(fetchedPosts);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}

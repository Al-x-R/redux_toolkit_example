import React, { useState } from 'react';
import PostItem from './PostItem';
import { postAPI } from '../services/PostService';

const PostsList = () => {
  const [limit, setLimit] = useState(10);
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);

  return (
    <div>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {posts && posts.map(post => <PostItem key={post.id} post={post}/>)}
    </div>
  );
};

export default PostsList;

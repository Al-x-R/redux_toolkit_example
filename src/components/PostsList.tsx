import React, { useState } from 'react';

import PostItem from './PostItem';
import { postAPI } from '../services/PostService';
import { IPost } from '../interfaces/IPost';

const PostsList = () => {
  const [limit, setLimit] = useState(10);
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post: IPost) => {
    deletePost(post)
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post)
  }

  return (
    <div>
      <button onClick={handleCreate}>Add new post</button>
      {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {posts && posts.map(post => <PostItem
        key={post.id}
        post={post}
        remove={handleRemove}
        update={handleUpdate}
      />)}
    </div>
  );
};

export default PostsList;

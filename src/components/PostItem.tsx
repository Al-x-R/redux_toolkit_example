import React, { FC } from 'react';
import { IPost } from '../interfaces/IPost';

interface PostItemProps {
  post: IPost;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div>
      {post.id}. {post.title}
    </div>
  );
};

export default PostItem;

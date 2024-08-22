import React from 'react';

import type { Post } from '@/entities/post.ts';

import styles from './PostCard.module.scss';

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  return (
    <div className={styles.post}>
      <p className={styles.number}>{post.id}.</p>
      <div className={styles.body}>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.text}>{post.body}</p>
      </div>
    </div>
  );
};

export default PostCard;

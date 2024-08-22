import React from 'react'
import styles from './PostCard.module.scss'
import {Post} from '@/entities/post.ts'


interface Props {
	post: Post
}

function PostCard({post}: Props) {


	return <div className={styles.post}>
		<p className={styles.number}>{post.id}.</p>
		<div className={styles.body}>
			<p className={styles.title}>{post.title}</p>
			<p className={styles.text}>{post.body}</p>
		</div>
	</div>
}

export default PostCard

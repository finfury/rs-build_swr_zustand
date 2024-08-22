import {useState} from 'react'
import type {AxiosResponse} from 'axios'
import useSWR, {useSWRConfig} from 'swr'

import Button from '@/components/Button/Button.tsx'
import PostCard from '@/components/PostCard/PostCard.tsx'
import type {Post} from '@/entities/post.ts'
import {fetchGetPosts} from '@/shared/api/posts.ts'

import styles from './Posts.module.scss'

const Posts = () => {
	const [pageIndex, setPageIndex] = useState<number>(1)
	const {mutate} = useSWRConfig()
	const response = useSWR<AxiosResponse<Post[]>>(
		`/posts?_limit=5&_page=${pageIndex}`,
		fetchGetPosts,
	)

	if (response.isLoading) return <div>Получаем посты...</div>
	if (response.error) return <div>К сожалению, произошла ошибка</div>
	if (!response.data || !response.data.data) return <div>Данные не найдены</div>

	console.log('Обновление компонента', response.data.data)

	const mutatePostsHandler = () => {
		mutate('/posts')
	}

	const nextPageClickHandler = () => {
		setPageIndex(pageIndex + 1)
	}
	const prevPageClickHandler = () => {
		if (pageIndex === 1) return
		setPageIndex(pageIndex - 1)
	}

	return (
		<div className={styles.posts}>
			<div className={styles.section}>
				<h3 className={styles.sectionTitle}>Posts</h3>
				<div className={styles.list}>
					{response.data.data.map(post => {
						return <PostCard key={post.id} post={post} />
					})}
				</div>
				<div className={styles.buttons}>
					<Button
						text='Предыдущая страница'
						variant='outlined'
						onClick={prevPageClickHandler}
					/>
					<Button
						text='Обновить посты'
						variant='outlined'
						type='button'
						className={styles.button}
						onClick={mutatePostsHandler}
					/>
					<Button
						text='Следующая страница'
						variant='outlined'
						onClick={nextPageClickHandler}
					/>
				</div>
			</div>
		</div>
	)
}

export default Posts

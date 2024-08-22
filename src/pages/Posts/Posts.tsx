import {AxiosResponse} from 'axios'
import useSWR, {useSWRConfig} from 'swr'
import {fetchGetPosts} from '@/shared/api/posts.ts'
import {Post} from '@/entities/post.ts'
import PostCard from '@/components/PostCard/PostCard.tsx'
import styles from './Posts.module.scss'
import Button from '@/components/Button/Button.tsx'


function Posts() {
	const {mutate} = useSWRConfig()
	const response = useSWR<AxiosResponse<Post[]>>('/posts', fetchGetPosts)


	if (response.isLoading) return <div>Получаем посты...</div>
	if (response.error) return <div>К сожалению, произошла ошибка</div>

	console.log('Обновление компонента', response.data.data)

	const mutatePostsHandler = () => {
		mutate('/posts')
	}

	if (!response.data || !response.data.data) return <div>Данные не найдены</div>

	return <div className={styles.posts}>
		<div className={styles.section}>
			<h3 className={styles.sectionTitle}>Posts</h3>
			<div className={styles.list}>
				{response.data.data.map(post => {
					return <PostCard key={post.id} post={post} />
				})}
			</div>
			<Button text={'Обновить посты'} variant={'outlined'} type={'button'} className={styles.button}
					onClick={mutatePostsHandler} />
		</div>
	</div>
}

export default Posts

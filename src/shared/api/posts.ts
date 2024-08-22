import {AxiosResponse} from 'axios'
import {$host} from '@/shared/api/api.ts'
import {Post} from '@/entities/post.ts'


export async function fetchGetPosts(): Promise<AxiosResponse<Post[]>> {
	return await $host.get('posts', {params: {_limit: 20}})
}

export async function fetchGetPost(id: number): Promise<AxiosResponse<Post> | undefined> {
	const data = await $host.get('posts/' + id)
	if (data.status !== 200) return
	return data
}

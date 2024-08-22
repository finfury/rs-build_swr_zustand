import type {AxiosResponse} from 'axios'

import type {Post} from '@/entities/post.ts'
import {$host} from '@/shared/api/api.ts'

export async function fetchGetPosts(url: string): Promise<AxiosResponse<Post[]>> {
	return await $host.get(url)
}

export async function fetchGetPost(id: number): Promise<AxiosResponse<Post> | undefined> {
	const data = await $host.get(`posts/${id}`)
	if (data.status !== 200) return
	return data
}

import React, {useEffect} from 'react'
import useSWR from 'swr'
import {AxiosResponse} from 'axios'
import UserCard from '@/components/UserCard/UserCard.tsx'
import {useUserStore} from '@/shared/store/store.ts'
import Posts from '@/pages/Posts/Posts.tsx'
import styles from './Main.module.scss'


function Main() {
	const {users, getUsers} = useUserStore()

	useEffect(() => {
		getUsers()
	}, []);

	return <div className={styles.main}>
		<div className={styles.section}>
			<h3 className={styles.sectionTitle}>All Users</h3>
			<div className={styles.users}>
				{users.map(user => {
					return <UserCard key={user.id} user={user} />
				})}
			</div>
		</div>
		<Posts />
	</div>
}

export default Main

import React from 'react'

import Button from '@/components/Button/Button.tsx'
import type {User} from '@/entities/user.ts'
import man from '@/images/man.jpg'
import woman from '@/images/woman.jpg'
import {useUserStore} from '@/shared/store/store.ts'

import styles from './UserCard.module.scss'

interface Props {
	user: User
}

const UserCard = ({user}: Props) => {
	const removeUser = useUserStore(state => state.removeUser)
	const removeUserHandler = user => {
		console.log('remove', user)
		removeUser(user.id)
	}

	return (
		<div className={styles.user}>
			<img src={user.id % 2 === 0 ? man : woman} alt='person' className={styles.image} />
			<p className={styles.name}>{user.name}</p>
			<p className={styles.text}>Phone: {user.phone}</p>
			<p className={styles.text}>
				{user.company.name} {user.company.bs}
			</p>
			<p className={styles.text}>
				{user.address.city} {user.address.street}
			</p>
			<Button
				text='Удалить'
				variant='outlined'
				type='button'
				onClick={() => removeUserHandler(user)}
			/>
		</div>
	)
}

export default UserCard

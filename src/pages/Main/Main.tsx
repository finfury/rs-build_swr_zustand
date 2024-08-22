import React, {useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'

import Header from '@/components/Header/Header.tsx'

import styles from './Main.module.scss'

const Main = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/users')
	}, [])

	return (
		<div className={styles.main}>
			<Header />
			<Outlet />
		</div>
	)
}

export default Main

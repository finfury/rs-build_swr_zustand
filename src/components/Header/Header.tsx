import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {clsx} from 'clsx'

import logo from '@/images/favicon.png'

import styles from './Header.module.scss'

const Header = () => {
	const [activeMenu, setActiveMenu] = useState<boolean>(false)

	return (
		<>
			<div className={styles.headerPadding}></div>
			<header className={styles.header}>
				<div
					className={clsx(styles.headerCover, activeMenu && styles.active)}
					onClick={() => setActiveMenu(!activeMenu)}></div>
				<div className={clsx(styles.headerSidebar, activeMenu && styles.active)}>
					<h6 className={styles.headerSidebarTitle}>
						<span>Навигация</span>
					</h6>
					<ul className={styles.headerSidebarList}>
						<li
							onClick={() => setActiveMenu(false)}
							className={styles.headerSidebarItem}>
							<NavLink to='/users' className={styles.headerSidebarItemLink}>
								Users
							</NavLink>
						</li>
						<li
							onClick={() => setActiveMenu(false)}
							className={styles.headerSidebarItem}>
							<NavLink to='/posts' className={styles.headerSidebarItemLink}>
								Posts
							</NavLink>
						</li>
					</ul>
				</div>
				<div className={styles.container}>
					<div className={styles.headerBody}>
						<NavLink to='/' className={styles.headerLogo}>
							<img src={logo} alt='logo' className={styles.headerLogoImg} />
							<p className={styles.headerLogoText}>Home</p>
						</NavLink>
						<div
							onClick={() => setActiveMenu(!activeMenu)}
							className={clsx(styles.headerBurger, activeMenu && styles.active)}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header

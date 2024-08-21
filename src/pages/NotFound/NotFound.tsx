import {Link} from 'react-router-dom'
import styles from './NotFound.module.scss'

function NotFound() {
	return (
		<Link className={styles.notfound} to={'/'}>
			Страница не найдена!
		</Link>
	)
}

export default NotFound

import {Route, Routes} from 'react-router-dom'
import Main from '@/pages/Main/Main.tsx'
import {clsx} from 'clsx'
import '@/styles/common.scss'
import styles from './App.module.scss'

const App = () => {
	return (
		<div className={clsx(styles.app)}>
			<Routes>
				<Route path='/' element={<Main />} />
			</Routes>
		</div>
	)
}

export default App

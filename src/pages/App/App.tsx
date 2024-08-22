import { Route, Routes } from 'react-router-dom';
import { clsx } from 'clsx';

import Users from '@/components/Users/Users.tsx';
import Main from '@/pages/Main/Main.tsx';
import Posts from '@/pages/Posts/Posts.tsx';

import '@/styles/common.scss';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={clsx(styles.app)}>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='users' element={<Users />} />
          <Route path='posts' element={<Posts />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';

import UserCard from '@/components/UserCard/UserCard.tsx';
import { useUserStore } from '@/shared/store/store.ts';

import styles from './Users.module.scss';

const Users = () => {
  const { users, getUsers } = useUserStore();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>All Users</h3>
      <div className={styles.users}>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Users;

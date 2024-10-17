import React from 'react';
import { useGetUsersQuery } from '../../store/sercives/usersApi';
import { UserI } from '../../interface/user.interface';

import style from './style.module.scss';

const UserList: React.FC = (props) => {
   const { data, error, isLoading } = useGetUsersQuery('');
   return (
      <div className={style.container}>
         <ul className={style.ulContainer}>
            {error ? (
               <>Oh no, there was an error</>
            ) : isLoading ? (
               <>Loading...</>
            ) : (
               data.map((e: UserI) => {
                  return (
                     <li className={style.liContainer} key={e.id}>
                        <p>Name: {e.name}</p>
                        <p>Username: {e.username}</p>
                        <p>Email: {e.email}</p>
                        <p>Phone: {e.phone}</p>
                     </li>
                  );
               })
            )}
         </ul>
      </div>
   );
};

export default UserList;

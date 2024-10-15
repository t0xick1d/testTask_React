import React from 'react';
import { useGetUsersQuery } from '../../store/sercives/users';
import { UserI } from '../../interface/user.interface';

import style from './style.module.scss';

const UserList: React.FC = (props) => {
   const { data, error, isLoading } = useGetUsersQuery('');
   console.log(data);
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
                     <li>
                        <p>{e.name}</p>
                        <p>{e.username}</p>
                        <p>{e.email}</p>
                        <p>{e.phone}</p>
                     </li>
                  );
               })
            )}
         </ul>
      </div>
   );
};

export default UserList;

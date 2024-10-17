import React from 'react';
import { useGetUsersQuery } from '../../store/sercives/usersApi';
import { UserI } from '../../interface/user.interface';
import { useAppSelector } from '../../hooks/hooks';

import style from './style.module.scss';

const UserList: React.FC = (props) => {
   const { data, error, isLoading } = useGetUsersQuery('');
   const filterValue = useAppSelector((state) => state.userReducer.filterInput);
   const selectValue = useAppSelector((state) => state.userReducer.filterSelect);

   const filterUserList = () => {
      if (filterValue === '') {
         return data;
      }
      return data.filter((e: UserI) => {
         return e[selectValue].toLowerCase().includes(filterValue.toLowerCase());
      });
   };
   const filterList = filterUserList();
   return (
      <div className={style.container}>
         <ul className={style.ulContainer}>
            {error ? (
               <>Oh no, there was an error</>
            ) : isLoading ? (
               <>Loading...</>
            ) : (
               filterList.map((e: UserI) => {
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

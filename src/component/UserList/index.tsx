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
                        <div className={style.containerInfo}>
                           <p>Name:</p>
                           <p> {e.name}</p>
                        </div>
                        <div className={style.containerInfo}>
                           <p>Username: </p>
                           <p>{e.username}</p>
                        </div>
                        <div className={style.containerInfo}>
                           <p>Email:</p>
                           <p> {e.email}</p>
                        </div>
                        <div className={style.containerInfo}>
                           <p>Phone:</p>
                           <p> {e.phone}</p>
                        </div>
                     </li>
                  );
               })
            )}
         </ul>
      </div>
   );
};

export default UserList;

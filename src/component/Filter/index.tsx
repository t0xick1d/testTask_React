import React from 'react';
import { setInputFilterUser, setSelectFilterUser } from '../../store/sercives/usersSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import style from './style.module.scss';

const Filter: React.FC = (props) => {
   const dispatch = useAppDispatch();
   const filteralue = useAppSelector((state) => state.userReducer.filterInput);
   const selectValue = useAppSelector((state) => state.userReducer.filterSelect);
   type valueI = 'name' | 'username' | 'phone' | 'email';
   const setSelectValue = (e: any) => {
      const value: valueI = e.target.value;
      dispatch(setSelectFilterUser(value));
   };

   return (
      <div className={style.container}>
         <h2>Search by filter</h2>
         <select name="select" onChange={(e) => setSelectValue(e)} value={selectValue}>
            <option value="name">Name</option>
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
         </select>
         <input
            type="text"
            onChange={(e) => dispatch(setInputFilterUser(e.currentTarget.value))}
            value={filteralue}
         />
      </div>
   );
};

export default Filter;

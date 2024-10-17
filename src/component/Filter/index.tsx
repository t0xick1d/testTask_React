import React from 'react';
import { setInputFilterUser, setSelectFilterUser } from '../../store/sercives/usersSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import style from './style.module.scss';

import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

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
         <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            onChange={(e) => setSelectValue(e)}
            value={selectValue}
         >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="username">Username</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="phone">Phone</MenuItem>
         </Select>

         {/* <select name="select">
            <option value="name">Name</option>
            <option value="username">Username</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
         </select> */}
         <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            type="text"
            onChange={(e) => dispatch(setInputFilterUser(e.currentTarget.value))}
            value={filteralue}
         />
         {/* <input
            type="text"
            onChange={(e) => dispatch(setInputFilterUser(e.currentTarget.value))}
            value={filteralue}
         /> */}
      </div>
   );
};

export default Filter;

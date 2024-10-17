import { createSlice } from '@reduxjs/toolkit';
import { FilteSelectType } from '../../interface/filter.interface';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: FilteSelectType = {
   filterInput: '',
   filterSelect: 'name',
};

const userSlice = createSlice({
   name: 'User',
   initialState,
   reducers: {
      setInputFilterUser: (state, action: PayloadAction<string>) => {
         state.filterInput = action.payload;
      },
      setSelectFilterUser: (
         state,
         action: PayloadAction<'name' | 'username' | 'phone' | 'email'>,
      ) => {
         state.filterSelect = action.payload;
      },
   },
});

export const { setInputFilterUser, setSelectFilterUser } = userSlice.actions;
export default userSlice.reducer;

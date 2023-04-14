import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    form: {},
    userList: [],
  },
  reducers: {
    submitUser: (state, action) => {
      state.userList.push(action.payload);
    },
  },
});

export const { submitUser } = usersSlice.actions;

export default usersSlice.reducer;

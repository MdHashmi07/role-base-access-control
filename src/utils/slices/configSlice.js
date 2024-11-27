import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState: {
        showMenuItems: true,
    },
    reducers: {
        toggleShowMenu : (state) => {
            state.showMenuItems = !state.showMenuItems;
        }
    }
});

export const {toggleShowMenu} = configSlice.actions;
export default configSlice.reducer;
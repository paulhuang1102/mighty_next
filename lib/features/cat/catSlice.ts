import { createAction, createSlice } from "@reduxjs/toolkit";

export interface CatState {
  loading: boolean;
  error: string | null;
  data: any;
}

export const initialState: CatState = {
  loading: false,
  error: null,
  data: [],
};

export const catSlice = createSlice({
  name: "cat",
  initialState: initialState,
  reducers: {
    getListSuccess: (state, action) => {
      state.data = action.payload;
    },
    getListFailure: (state, action) => {
        state.error = action.payload;
    }
  },
});

export const fetchCats = createAction("cat/fetch");
export const fechCancel = createAction("cat/cancel");
export const { getListSuccess, getListFailure } = catSlice.actions;
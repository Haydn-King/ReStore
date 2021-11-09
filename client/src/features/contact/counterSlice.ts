import { createSlice } from "@reduxjs/toolkit";

export interface CounterSlice {
  data: number;
  title: string;
}

const initialState: CounterSlice = {
  data: 42,
  title: "YARC (Yet Another Redux Counter with redux toolkit)",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.data += action.payload;
    },
    decrement: (state, action) => {
      state.data -= action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

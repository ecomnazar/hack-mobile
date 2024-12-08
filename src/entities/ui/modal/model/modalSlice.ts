import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TBottomSheetType } from "./interfaces";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    bottomSheet: {
      isOpen: false,
      type: "" as TBottomSheetType,
      data: null,
    },
  },
  reducers: {
    toggleBottomSheet: (
      state,
      action: PayloadAction<{
        modal: boolean;
        type: TBottomSheetType;
        data: any;
      }>
    ) => {
      const { modal, type } = action.payload;
      state.bottomSheet.isOpen = modal;
      state.bottomSheet.type = type;
      state.bottomSheet.data = action.payload.data;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { toggleBottomSheet } = modalSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    scrollToLaboratory: false,
    scrollToGallery: false,
    scrollToApplication: false
  },
  reducers: {
    setScrollToLaboratory: (state, action) => {
      state.scrollToLaboratory = action.payload;
    },
    setScrollToGallery: (state, action) => {
        state.scrollToGallery = action.payload;
    },
    setScrollToApplication: (state, action) => {
        state.scrollToApplication = action.payload;
    }
  },
});

export const { setScrollToLaboratory, setScrollToGallery, setScrollToApplication } = scrollSlice.actions;

export const selectScrollToLaboratory = (state) => state.scroll.scrollToLaboratory;

export const selectScrollToGallery = (state) => state.scroll.scrollToGallery;

export const selectScrollToApplication = (state) => state.scroll.scrollToApplication;

export default scrollSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";



const store=configureStore({
    reducer:{
        todo:formSlice,
    },
});

export default store;
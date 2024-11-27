import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./slices/configSlice.js"

const appStore = configureStore({
    reducer: {
        config: configReducer
    }
});

export default appStore;
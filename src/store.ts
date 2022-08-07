import { configureStore } from "@reduxjs/toolkit";

import calcReducer from './slices/calculator'
import themeReducer from './slices/theme'


const store = configureStore({
    reducer:{
        calc:calcReducer,
        theme:themeReducer
    }
})


export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


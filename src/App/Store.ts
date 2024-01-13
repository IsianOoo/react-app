import {configureStore} from "@reduxjs/toolkit";
import loggedUserReducer from "../features/loggedUserSlice";
import usersReducer from "../features/UsersSlice";
import postsReducer from "../features/postSlice"
import albumReducer from "../features/albumSlice";
import photosReducer from "../features/PhotosSlice"
import commentsReducer from "../features/CommentsSlice";
import todosReducer from "../features/TodosSlice";

const store = configureStore({
    reducer:{
        loggedUser: loggedUserReducer,
        users: usersReducer,
        posts: postsReducer,
        albums:albumReducer,
        photos: photosReducer,
        comments: commentsReducer,
        todos: todosReducer
    }
})

export type AppDispatch = typeof store.dispatch
export default store
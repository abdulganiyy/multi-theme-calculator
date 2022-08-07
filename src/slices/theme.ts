import {createSlice,PayloadAction} from '@reduxjs/toolkit'

type initialStateType = {
    mode:string
}

const initialState:initialStateType = {
    mode:''
}
const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        changeMode:(state,action:PayloadAction<string>)=>{

            state.mode = action.payload
            
        }
    }

})


export const {changeMode} = themeSlice.actions


export default themeSlice.reducer


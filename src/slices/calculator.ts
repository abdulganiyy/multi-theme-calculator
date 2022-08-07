import {createSlice,PayloadAction} from '@reduxjs/toolkit'

type initialStateType = {
    inputValue:string,
    displayValue:string
}

const initialState:initialStateType = {
    inputValue:"",
    displayValue:""
}
const calcSlice = createSlice({
    name:'calc',
    initialState,
    reducers:{
        updateCalc:(state,action:PayloadAction<string>)=>{

            const value = action.payload

            switch(value){
                case '=' :{
                    if(state.inputValue !== ''){
                        try {
                            const formatted = eval(state.inputValue)
                            
                            state.displayValue = formatted.toLocaleString('en-US')
                            
                        } catch (error) {
                            alert('Math Error')
                            state.displayValue = ''
                        }
                    }

                    break
                }

                case 'del':{
                    const inputValue = state.inputValue.substring(0,state.inputValue.length-1)

                    state.inputValue = inputValue

                    break
                }

                case 'reset':{
                    

                    state.inputValue = ''
                    state.displayValue = ''

                    break
                }

                default:{
                    state.inputValue += value

                    break
                }
            }

        }
    }

})


export const {updateCalc} = calcSlice.actions


export default calcSlice.reducer

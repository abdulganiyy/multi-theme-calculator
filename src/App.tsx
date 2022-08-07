import React from 'react';
import './App.css';
import {useAppSelector,useAppDispatch } from './hooks'
import {updateCalc} from './slices/calculator'
import {changeMode} from './slices/theme'

function App() {
  const {inputValue,displayValue} = useAppSelector(state => state.calc)
  const {mode} = useAppSelector(state => state.theme)
  const dispatch = useAppDispatch()

  const handleClick = (val:string) => {

    dispatch(updateCalc(val))

  }

  const onThemeHandler = (mode:string) => {
    dispatch(changeMode(mode))
  }
  return (
    <div className={`flex items-center flex-col h-screen bg-gray-700 p-6 ${mode === 'mode2'?'bg-sky-50':''} ${mode === 'mode3'?'bg-purple-800':''}`} >
      <div className='w-full md:w-96'>
       <div className={`flex text-white justify-between items-center ${mode === 'mode2'?'text-gray-700':''} ${mode === 'mode3'?'text-yellow-500':''}`}>
        <div className='self-center mt-4 font-bold'>Calc</div> 
       <div className='flex justify-between'><span className='self-center mt-4 mr-4 uppercase'>Theme </span>
       <div>
        <div className='flex flex-row justify-around'><span>1</span><span>2</span><span>3</span></div>
        <div className='flex flex-row justify-around items-center bg-gray-900 w-20 h-7 toggle-border mb-2'><span onClick={()=>onThemeHandler('mode1')} className={`w-4 h-4 bg-gray-900 rounded-lg ${mode === 'mode1' ?'bg-red-600':''}`}></span><span onClick={()=>onThemeHandler('mode2')} className={`w-4 h-4 bg-gray-900 rounded-lg ${mode === 'mode2' ?'bg-orange-500':''}`}></span><span onClick={()=>onThemeHandler('mode3')} className={`w-4 h-4 bg-gray-900 rounded-lg ${mode === 'mode3' ?'bg-cyan-400':''}`}></span></div>
       </div>
      </div>
      </div>
       <div className={`text-white rounded-md bg-gray-900  ${mode === 'mode2'?'bg-gray-200':''} ${mode === 'mode3'?'bg-purple-600':''}`}>
        <input disabled className={`px-4 outline-none text-right rounded-md w-full bg-gray-900  ${mode === 'mode2'?'bg-gray-200':''} ${mode === 'mode3'?'bg-purple-600':''}`} type={'text'} value={inputValue} />
        <input disabled className={`px-4 outline-none pb-4 rounded-md font-bold text-3xl text-right w-full bg-gray-900  ${mode === 'mode2'?'bg-gray-200':''} ${mode === 'mode3'?'bg-purple-600':''}`} type={'text'} value={displayValue} />
       </div>
      <div className={`grid grid-cols-4 mt-4 p-4 gap-2.5 bg-gray-800 rounded  ${mode === 'mode2'?'bg-gray-500':''} ${mode === 'mode3'?'bg-purple-700':''}`}>
        <button onClick={()=>handleClick('7')} className='bg-stone-200 rounded'>7</button>
        <button onClick={()=>handleClick('8')} className='bg-stone-200 rounded'>8</button>
        <button onClick={()=>handleClick('9')} className='bg-stone-200 rounded'>9</button>
        <button onClick={()=>handleClick('del')} className='bg-stone-200 rounded'>DEL</button>
        <button onClick={()=>handleClick('4')} className='bg-stone-200 rounded'>4</button>
        <button onClick={()=>handleClick('5')} className='bg-stone-200 rounded'>5</button>
        <button onClick={()=>handleClick('6')} className='bg-stone-200 rounded'>6</button>
        <button onClick={()=>handleClick('+')} className='bg-stone-200 rounded'>+</button>
        <button onClick={()=>handleClick('1')} className='bg-stone-200 rounded'>1</button>
        <button onClick={()=>handleClick('2')} className='bg-stone-200 rounded'>2</button>
        <button onClick={()=>handleClick('3')} className='bg-stone-200 rounded'>3</button>
        <button onClick={()=>handleClick('-')} className='bg-stone-200 rounded'>-</button>
        <button onClick={()=>handleClick('.')} className='bg-stone-200 rounded'>.</button>
        <button onClick={()=>handleClick('0')}  className='bg-stone-200 rounded'>0</button>
        <button onClick={()=>handleClick('/')} className='bg-stone-200 rounded'>/</button>
        <button onClick={()=>handleClick('*')} className='bg-stone-200 rounded'>*</button>
        <button onClick={()=>handleClick('reset')} className='col-span-2 bg-stone-200 rounded'>RESET</button>
        <button onClick={()=>handleClick('=')} className='col-span-2 bg-stone-200 rounded'>=</button>

       </div>
      </div>
    </div>
  );
}

export default App;

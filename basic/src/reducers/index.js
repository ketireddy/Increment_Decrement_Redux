import React from 'react';
import { INCREMENT, DECREMENT, RESET } from '../constants/index';

const initialState = {
    count: 0,
}
  
export const reducer = (state = initialState, action) => {
  
    if(action.type === INCREMENT){
  
      return {
        count: state.count + 1,
      }
    } 
    if(action.type === DECREMENT) {
  
      return {
        count: state.count - 1,
      }
    }
    if(action.type === RESET) {
  
      return {
        count: 0,
      }
    }
    
    return state;
  };
import { createFeatureSelector, createSelector } from "@ngrx/store"

// state
let initialState={
  n:0
}

// counter component فى ال store فى ال generic type دى جوا ال interface هينادى على
export interface storeInterface {
  counter:Counter
}

interface Counter{
  n:number
}
interface CustomAction{
  type:any,
  payload:any
}

// reducer
export function counterReducer(state=initialState,action:any){
    switch (action.type){
      case 'increament':
        return { n: state.n + action.payload }
      case 'decreament':
        return { n: state.n - action.payload}
      default:
        return state

    }
}

// reducer ودى بديها اسم ال FeatureSelector عشان اعمل ال
let counterFs=createFeatureSelector<Counter>("counter")
 /*
    selector ==> اللى هو الجزء اللى انا محتاجاة  state وبترجع جزء من ال state فنكشن بتاخد ال
     دة يرجعلى اية selector يعنى ببرمج ال
     selector عشان اعمل ال
*/
export let nSelector = createSelector(counterFs,state=>state.n)

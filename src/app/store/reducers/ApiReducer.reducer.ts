import { FALIED, LOAD, SUCCESS } from "../actions/apiAction.action"

export interface modal{
  userId:number,
  id:number,
  title:string,
  complated:boolean
}

export function apiReducer(state:modal[],action:any){
     switch(action.type){
       case SUCCESS:
         return action.payload
       case FALIED:
         console.log('error',action.payload)
         return state
         case LOAD:
         return state
     }
}

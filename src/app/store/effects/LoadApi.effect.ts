import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http'
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { FailedAction, LOAD, SuccessAction } from "../actions/apiAction.action";
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from "rxjs";

@Injectable({providedIn:'root'})
export class LoadApiEffects{
  constructor(private http:HttpClient, private actions : Actions){}


   getDataEffect=createEffect(()=> this.actions.pipe( //لازم ترجع اوبزرفيل
     // ofType() ودا عن طريق الفنكشن  action  بتاع ال type اولا لازم يشوف ال
     ofType(LOAD),
     mergeMap(()=>this.http.get('https://jsonplaceholder.typicode.com/todos').pipe(//لمفروض هيعمل اكشن api لما يجيب الداتا من ال
       map((data) => new SuccessAction(data)), // succedAction لو نجح فى انة يجيب الداتا كدة هيحولة للاكشن اللى هو
        //of ==> عشان تحولة لابزروفابل
       catchError((err) => of(new FailedAction(err))) // falidAction ودى لو منجحش هيروح لل

   ))
   ))

}

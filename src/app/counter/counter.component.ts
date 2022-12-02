import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Increament,decreament } from '../store/actions/counter.action';
import { nSelector, storeInterface } from '../store/reducers/counter.reducer';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count:any
  constructor(private store:Store<storeInterface>) {
    //عشان لما الداتا تتغير تسمع هنا state عشان اراقب ال
    store.subscribe((res)=>{
     console.log(res); // هترجع ==> {counter:{n:0}} store بيجيب كل ال
     this.count=res.counter.n
    })
    /*
    ودى افضل لأن دى هترجع الجزء اللى انا عايزة بس selector استخدم دى بدل اللى فوق باستخدم ال
    لكن اللى فوق بترجع كلة
    */
    store.select(nSelector).subscribe((res)=>{
      console.log("res = ",res)
    })
  }
  ngOnInit(): void {}
  increase(){
  //  this.store.dispatch({type:'increament',payload:2})
  this.store.dispatch(new Increament(2))
  }
  decrease(){
    // this.store.dispatch({type:'decreament',payload:2})
    this.store.dispatch(new decreament(2))
  }
}

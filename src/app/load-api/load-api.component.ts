import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadTodosAction } from '../store/actions/apiAction.action';

@Component({
  selector: 'app-load-api',
  templateUrl: './load-api.component.html',
  styleUrls: ['./load-api.component.scss']
})
export class LoadApiComponent implements OnInit {

  constructor(private store:Store<any>) {
    store.subscribe((res)=>{
      console.log("api = ",res.loadApi)
    })
   }

  ngOnInit(): void {
  }
  load(){
    this.store.dispatch(new LoadTodosAction())
  }


}

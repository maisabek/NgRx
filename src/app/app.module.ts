import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefinationComponent } from './defination/defination.component';
import {StoreModule} from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
// import { reducers } from './store/store';
import {EffectsModule} from '@ngrx/effects';
import { LoadApiComponent } from './load-api/load-api.component';
import { LoadApiEffects } from './store/effects/LoadApi.effect';
import { HttpClientModule } from '@angular/common/http';
import { apiReducer } from './store/reducers/ApiReducer.reducer';
import { counterReducer } from './store/reducers/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    DefinationComponent,
    CounterComponent,
    LoadApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      counter:counterReducer,
      loadApi:apiReducer
    }),
    EffectsModule.forRoot([LoadApiEffects]),
    StoreDevtoolsModule.instrument({// devTools عشان اظبط اعددات ال
    /*
     اقصى عدد من الاكشن اللى تتحط فى الهستورى ممكن
     اديها رقم ولو عدد الاكشن ذاد هيمسح من القديم او فالس والفالس هنا معنها اى عدد
    */
    maxAge: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

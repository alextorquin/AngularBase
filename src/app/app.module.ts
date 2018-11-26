import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsEffects } from './store/items/items.effects';
import { metaReducers, rootReducers } from './store/root';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducers, { metaReducers }),
    EffectsModule.forRoot([ItemsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from './components/store/application.reducer';
import { ComponentsModule } from './components/components.module'
import { MaterialModule } from './core/material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    ComponentsModule,
    FormsModule,
    MaterialModule,
    StoreModule.forRoot({ filter: filterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
    }),
  ]
})
export class AppModule {}

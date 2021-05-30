import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HeadComponent } from './components/head/head.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { filterReducer } from './components/store/application.reducer';

@NgModule({
  declarations: [AppComponent, FilterComponent, HeadComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    StoreModule.forRoot({ filter: filterReducer })
  ]
})
export class AppModule {}

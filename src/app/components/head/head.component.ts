import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  constructor(private store: Store<any>) {} //TODO replace any with model

  selectedOptions: any;

  ngOnInit() {
    this.store.select('filter').subscribe((filter: { showFilter: any; }) => {
      this.selectedOptions = filter.showFilter;
    });
  }
}

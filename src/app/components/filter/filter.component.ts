import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveFilters } from '../store/application.action';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  constructor(private store: Store<any>) {} //TODO replace any with model

  selectedOptions: [];

  dataList: {
    name: string;
  }[] = [
    {
      name: 'Area 1'
    },
    {
      name: 'Area 2'
    },
    {
      name: 'Area 3'
    }
  ];

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => {
      this.selectedOptions = filter.showFilter;
      console.log(filter.showFilter);
    });
  }

  onCheckBoxChanged() {
    this.store.dispatch(saveFilters({ savedFilters: this.selectedOptions }));
  }
}

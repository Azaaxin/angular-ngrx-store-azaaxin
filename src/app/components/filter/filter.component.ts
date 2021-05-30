import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { saveFilters } from '../store/application.action';
import { FilterState } from '../store/application.reducer';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  constructor(private store: Store<any>) {}

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
  selectedOptions: [];

  ngOnInit(): void {
    this.store.select('filter').subscribe(filter => {
      this.selectedOptions = filter.showFilter;
      console.log(filter.showFilter);
    });
  }

  onCheckBoxChanged(e) {
    this.store.dispatch(saveFilters({ savedFilters: this.selectedOptions }));
    console.log(e);
  }
}

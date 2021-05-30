import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { saveFilters } from '../store/application.action';
import { FilterState } from '../store/application.reducer';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export interface Filter {
  filterArray: string[];
}

export class FilterComponent implements OnInit {
  //listOfcategories = ['Number', 'House', 'Cat'];
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
  selectedOptions: string[];

  ngOnInit(): void {
    // TODO: Unsubscribe
    this.store.select('filter').subscribe(selectedOptions => {
      if (selectedOptions) {
        this.selectedOptions = selectedOptions.showFilter;
      }
      console.log(selectedOptions.showFilter);
    });
  }

  onCheckBoxChanged(e) {
    this.store.dispatch(saveFilters({ savedFilters: this.selectedOptions }));
    console.log(e);
  }
}

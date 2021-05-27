import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
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
    });
  }

  onCheckBoxChanged(e) {
    this.store.dispatch({ type: '[Changed Filter]' });
    console.log(e);
  }
}

import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {PaginationInstance} from "ng2-pagination";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit {

  @Input('data') meals: string[] = ["Hello", "World", "Hello", "World", "Hello", "World", "Hello", "World", "Hello", "World", "Hello", "World", "Hello"];
  page: number = 1;

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor() {
  }

  ngOnInit() {
  }

}

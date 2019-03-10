import {Component, Input, OnInit, ErrorHandler} from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit, ErrorHandler {

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  constructor() { }

  ngOnInit() {
    debugger;
    this.handleError(new Error('This is Angular Element Error'));
  }

  handleError(err: any): void {
    console.error(err);
  }

}

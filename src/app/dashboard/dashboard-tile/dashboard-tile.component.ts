import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit {

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  constructor() { }

  ngOnInit() {
    debugger;
    throw "this is an error";
  }

}

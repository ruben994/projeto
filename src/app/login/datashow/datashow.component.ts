import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datashow',
  templateUrl: './datashow.component.html',
  styleUrls: ['./datashow.component.css']
})
export class DatashowComponent implements OnInit {

  @Input() form: any;


  constructor() { }

  ngOnInit(): void {
  }

}

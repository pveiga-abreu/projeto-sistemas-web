import { Component, Input, OnInit } from '@angular/core';
import { Client } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() 
  clientList: Client[] = [];

  constructor() { }

  ngOnInit(): void { }

}

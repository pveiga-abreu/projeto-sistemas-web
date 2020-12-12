import { Component, OnInit } from '@angular/core';
import { Client, ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientList: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientList = this.clientService.clients;
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: Client = new Client();

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {}

  registrar() {
    this.clientService.createClient(this.client);
    this.router.navigate(['']);
  }

}

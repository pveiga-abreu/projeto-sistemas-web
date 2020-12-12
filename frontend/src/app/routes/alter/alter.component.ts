import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-alter',
  templateUrl: './alter.component.html',
  styleUrls: ['./alter.component.css']
})
export class AlterComponent implements OnInit {

  client: Client = new Client();

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');

    if(id) this.client = this.clientService.getClient(parseInt(id));
  }

  alterar() {
    this.clientService.updateClient(this.client);
    this.router.navigate(['home']);
  }

  excluir() {
    this.clientService.deleteClient(this.client);
    this.router.navigate(['']);
  }
}

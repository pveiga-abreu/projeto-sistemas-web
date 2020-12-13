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
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.clientService.getClient(parseInt(id))
      .then(data => {
        this.client = data;
      })
      .catch(err => {
        alert('Falha ao buscar os dados do cliente!');
        this.router.navigate(['']);
      });
    }
  }

  alterar(): void {
    this.clientService.updateClient(this.client)
    .then(data => {
      alert("Dados atualizados com sucesso!");
      this.router.navigate(['']);
    })
    .catch(err => {
      alert(err.error.join('\n'));
    });
    
  }
  
  excluir(): void {
    this.clientService.deleteClient(this.client)
    .then(data => {
      alert("Cliente excluído com sucesso!");
      this.router.navigate(['']);
    })
    .catch(err => {
      alert("Falha ao excluir cliente!");
    });

  }
}

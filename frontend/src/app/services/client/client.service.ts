import { Injectable } from '@angular/core';

export class Client {
  id: number;
  name: string;
  surname: string;
  password: string;
  email: string;
  gender: string;
  cpf: string;
  rg: string;
  tel: string;
  birthDate: string;
  maritalStatus: string;
  postalCode: string;
  address: string;

  constructor(id: number=0, name: string="", surname: string="", password: string="", email: string="", gender: string="", cpf: string="", 
  rg: string="", tel: string="", birthDate: string="", maritalStatus: string="", postalCode: string="", address: string="") {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.password = password;
    this.email = email;
    this.gender = gender;
    this.cpf = cpf;
    this.rg = rg;
    this.tel = tel;
    this.birthDate = birthDate;
    this.maritalStatus = maritalStatus;
    this.postalCode = postalCode;
    this.address = address;
  }

}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Client[] = [{id:2,name:"José",surname:"Ninguém",email:"ze@ucl.br",password:"987412365",cpf:"",rg:"123456",tel:"987654321",birthDate:"02/03/1914",gender:"M",maritalStatus:"3",address:"",postalCode:"29171-449"},{id:4,name:"Joaquim",surname:"Epaminondas",email:"epa@ucl.br",password:"vwdcv341",cpf:"",rg:"",tel:"",birthDate:"01/01/1753",gender:"M",maritalStatus:"4",address:"",postalCode:"29000-000"}];
  
  constructor() { }

  getAllClients() {}

  getClient(id: number) {
    let cli = this.clients.find(c => c.id == id);

    if(!cli) cli = new Client();

    return cli;
  }

  createClient(client: Client) {
    this.clients.push(client);
  }

  updateClient(client: Client) {
    let i = this.clients.findIndex(c => c.id == client.id);
    
    if(i > -1) this.clients[i] = client; 
  }

  deleteClient(client: Client) {
    let i = this.clients.findIndex(c => c.id == client.id);

    if(i > -1) this.clients.splice(i,1);
  }

}

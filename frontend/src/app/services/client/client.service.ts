import { Injectable } from '@angular/core';
import axios from 'axios';

export class Client {
  Id: number;
  Nome: string;
  Sobrenome: string;
  Senha: string;
  Email: string;
  Sexo: string;
  CPF: string;
  RG: string;
  Telefone: string;
  DataNascimento: string;
  EstadoCivil: string;
  CEP: string;
  Endereco: string;

  constructor(id: number=0, name: string="", surname: string="", password: string="", email: string="", gender: string="", cpf: string="", 
  rg: string="", tel: string="", birthDate: string="", maritalStatus: string="", postalCode: string="", address: string="") {
    this.Id = id;
    this.Nome = name;
    this.Sobrenome = surname;
    this.Senha = password;
    this.Email = email;
    this.Sexo = gender;
    this.CPF = cpf;
    this.RG = rg;
    this.Telefone = tel;
    this.DataNascimento = birthDate;
    this.EstadoCivil = maritalStatus;
    this.CEP = postalCode;
    this.Endereco = address;
  }

}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients: Client[] = [];

  constructor() { }

  async getAllClients() : Promise<Client[]> {
    const response = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3003/user'
    });

    if(response.status == 200) this.clients = response.data.data;

    return this.clients;
  }

  async getClient(id: number) : Promise<Client> {
    const response = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3003/user/search/${id}`
    });

    if(response.status == 200) return response.data.data[0];

    return new Client();
  }

  async createClient(client: Client): Promise<Client> {
    const response = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:3003/user/register',
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(client)
    });

    if(response.status == 201) return client;
    else return new Client();

  }

  async updateClient(client: Client): Promise<Client> {
    console.log(JSON.stringify(client))

    const response = await axios({
      method: 'PUT',
      url: `http://127.0.0.1:3003/user/update/${client.Id}`,
      headers: {'Content-Type': 'application/json'},
      data: JSON.stringify(client)
    });
    if(response.status == 201) return client;
    else return new Client();

  }

  async deleteClient(client: Client): Promise<Client> {
    const response = await axios({
      method: 'DELETE',
      url: `http://127.0.0.1:3003/user/delete/${client.Id}`
    });

    if(response.status == 200) return client;
    else return new Client();
  }

}

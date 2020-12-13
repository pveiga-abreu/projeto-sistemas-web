import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  async getAllClients() : Promise<Client[]> {
    return await this.http.get<Client[]>('http://localhost:3003/user').toPromise();
  }
  
  async getClient(id: number) : Promise<Client> {
    return await this.http.get<Client>(`http://localhost:3003/user/${id}`).toPromise();
  }
  
  async createClient(client: Client): Promise<Client> {
    return await this.http.post<Client>('http://localhost:3003/user', client).toPromise();
  }
  
  async updateClient(client: Client): Promise<Client> {
    return await this.http.put<Client>(`http://localhost:3003/user/${client.Id}`, client).toPromise();
  }
  
  async deleteClient(client: Client): Promise<Client> {
    return await this.http.delete<Client>(`http://localhost:3003/user/${client.Id}`).toPromise();
  }

}

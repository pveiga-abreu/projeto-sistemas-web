import { Injectable } from '@angular/core';
import axios from 'axios';

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

  constructor(id: number, name: string, surname: string, password: string, email: string, gender: string="", cpf: string="", 
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
  // clientList: Client[] = await this.get_clients();

  constructor() { }

  // async get_clients() {
  //   let clients = await axios({
  //     method: 'GET',
  //     url: 'http://localhost:3003/user'
  //   });

  //   return [];
  // }
}

import { Injectable } from '@angular/core';
import axios from "axios";
import Promise from "bluebird";


@Injectable({
  providedIn: 'root'
})
export class BnHttpApiService {

  constructor() { }
  
  post(host, urlPart, parametros: any): any {
    console.log("POST: REQUEST ----> ", host + urlPart, parametros);
    return new Promise((resolve, reject) => {
      axios
        .post(host + urlPart, parametros)
        .then(data => {
          console.log("POST: RESPONSE <----", data);
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  get(host, urlPart): any {
    console.log("POST: REQUEST ----> ", host + urlPart);
    return new Promise((resolve, reject) => {
      axios
        .get(host + urlPart)
        .then(data => {
          console.log("POST: RESPONSE <----", data);
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  }


  postWithHeader(host, urlPart, parametros: any, headers: any): any {
    console.log("POST: REQUEST ----> ", host + urlPart, parametros);
    return new Promise((resolve, reject) => {
      axios
        .post(host + urlPart, parametros, headers)
        .then(data => {
          console.log("POST: RESPONSE <----", data);
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  postBlob(host, urlPart, parametros: any): any {
    console.log("POST: REQUEST exc ----> ", host + urlPart);
    return new Promise((resolve, reject) => {
      axios
        .post(host + urlPart, parametros, {responseType: 'blob'})
        .then(data => {
          console.log("POST: RESPONSE <----", data);
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  }

  delete(host, urlPart): any {
    console.log("DELETE: REQUEST ----> ",urlPart);
    return new Promise((resolve, reject) => {
      axios
        .delete(host + urlPart)
        .then(data => {
          console.log("DELETE: RESPONSE <----", data);
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}

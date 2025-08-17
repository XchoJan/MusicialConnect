import {api, API_URL} from './config';

export default class Api {
  static url = API_URL;

  static ping(){
    return api.get(`/ping`)
  }

  static auth(data) {
    return api.post(`/users/auth`, data);
  }

  static authConfirm(data) {
    return api.post(`/users/auth/confirm`, data);
  }


  static getUserData() {
    return api.get(`/users/profile`);
  }

  static getInstruments() {
    return api.get(`/static-data/instruments`);
  }

}

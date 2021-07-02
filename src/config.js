import isEmail from "sane-email-validation";
import validUrl from "valid-url";


//API Url
export const API_URL = "http://localhost:9001/v1"

//User details
export const User = {

  getAuthorization() {
    return localStorage.getItem('Authorization');
  },

  setAuthorization(token) {
    localStorage.setItem('Authorization', token);
  },

  setName(name) {
    localStorage.setItem('name', name);
  },

  getName() {
    localStorage.getItem('name');
  },

  setEmail(email) {
    localStorage.setItem('email', email);
  },

  getEmail() {
    localStorage.getItem('email');
  },

  clear() {
    localStorage.clear();
  },

  // removeUserId() {
  //   localStorage.removeItem('id');
  // },

  removeAccessToken() {
    localStorage.removeItem('access_token');
  },

  isLoggedIn(){
    return localStorage.getItem('access_token') ? true : false;
  }
}

export const Transport = {

  setTransList(transportList) {
    localStorage.setItem('transList', transportList);
  },

  getTransList() {
    //console.log("sss", localStorage.getItem('transList'))
    return JSON.parse(localStorage.getItem('transList'));
  },

  clear() {
    localStorage.clear();
  }

}
//Data validation Util goes in here.
export const Validate = {

    url(url) {
      return validUrl.isUri(url);
    },
  
    text(text) {
      if (!text || text.trim() === '') {
        return false;
      }
  
      return true;
    },
  
    email(email) {
      if (this.text(email))
        return isEmail(email);
      return false;
    },
  
    compare(text1, text2) {
      return text1 === text2;
    },
  }


 
  
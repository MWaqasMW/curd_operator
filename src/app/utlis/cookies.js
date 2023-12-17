// utils/cookies.js
import Cookies from "js-cookie";

// Set a cookie
export const setCookie = (name, value) => {
  console.log("value=========",value)
    try{
        Cookies.set(name, value);
    }catch(err){
        console.log(err)
    }
};

// Get a cookie value
export const getCookie = (name) => {

  const token = Cookies.get(name);
if(token){
    return (token)
}
};

// Delete a cookie
export const deleteCookie = (name) => {
  Cookies.remove(name);
};

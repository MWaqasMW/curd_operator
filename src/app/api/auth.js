import { useMutation } from 'react-query';
import { makeRequest } from '../utlis/helper.js';
import { BASE_URL } from '../utlis/constant.js';
import { showError, showSuccess } from '../utlis/customToast.js';
import { getCookie } from '../utlis/cookies.js';




export const signup = async (userData) => {
  try {
    const response = await makeRequest(
      `${BASE_URL}/auth/signup`,
      'POST',
      userData
    );

    return response;

  } catch (error) {
    throw error;
  }
};

export const login = async (userData)=>{
  try{
    const response = await makeRequest(
      `${BASE_URL}/auth/login`,
     'POST', 
     userData);

    return response;

  }catch(error){
    throw error;
  }

}


export const logout = async () => {
  const token = getCookie("token");
  const customHeaders = {
    Authorization: `Bearer ${token}`,
    "Content-type": "application/json",
  };
  
  try {
    const response = await makeRequest(
      `${BASE_URL}/auth/logout`,
      'GET',
      null,
      customHeaders
    );
    return response;
  } catch (error) {
   
  
    throw error;
  }
};

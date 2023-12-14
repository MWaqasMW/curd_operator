import { useMutation } from 'react-query';
import { makeRequest } from '../utlis/helper.js';
import { BASE_URL } from '../utlis/constant.js';
import { showError, showSuccess } from '../utlis/customToast.js';

// const customHeaders = {
//   Authorization: `Token ${token}`,
//   "Content-type": "application/json"
// }


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
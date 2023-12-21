import { useMutation } from "react-query";
import { login ,logout,signup } from "./auth";
import { useRouter } from "next/navigation";
import { showSuccess, showError } from "../utlis/customToast";
import { setDataInStorage } from "../utlis/localstorage";
import { setCookie } from "../utlis/cookies";
import { createStudent, getAllStudent  } from "./student";

export const useLogin = () => {
  const router = useRouter();

  return useMutation(login, {
    onSuccess: async (data) => {
      console.log("Login Succ:", data);
      showSuccess("Login successful");
      setDataInStorage("isAdmin",data.isAdmin)
      setCookie("token",data.token)
      setTimeout(() => {
        router.push("/dasboard");
      }, 1500);
    },
    onError: (error) => {
      showError("Login failed");
      console.error("Login failed:", error);
    },
  });
};


export const useSignup = () => {
  const router = useRouter();

  return useMutation(signup, {
    onSuccess: (data) => {
      showSuccess("Signup successful");
      console.log("Signup Succ:", data);
      
      setTimeout(()=>{

        router.push("/login");
      },1500)
    },
    onError: (error) => {
      console.log("Signup failed");
      const errorMessage = error.response?.data?.message || "Something went wrong during signup";
      showError(errorMessage);
    },
  });
};

export const useLogout=()=>{
  
  const router = useRouter();

  return useMutation(logout, {
    onSuccess: (data) => {
      console.log("Logout Succ:", data);
      setCookie("token","")
     
      showSuccess("Logout successful");
    },
    onError: (error) => {
      console.log("Logout failed");
      const errorMessage = error.response?.data?.message || "Something went wrong";
      showError(errorMessage);
      setCookie("token","")
    },
  });



}



export const useStudent = () => {
  return useMutation(createStudent, {
    onSuccess: (data) => {
      showSuccess("Signup successful");
      console.log("Signup Succ:", data);
    },
    onError: (error) => {
      console.log("Signup failed");
      const errorMessage = error.response?.data?.message || "Something went wrong during signup";
      showError(errorMessage);
    },
  });
};


export const useGetAllStudent = () => {
  const router = useRouter();

  return useMutation(getAllStudent, {
    onSuccess: (data) => {
      showSuccess("Signup successful");
      console.log("Signup Succ:", data);
    },
    onError: (error) => {
      console.log("Signup failed");
      const errorMessage = error.response?.data?.message || "Something went wrong during signup";
      showError(errorMessage);
    },
  });
};


// export const useEditStudent = () => {
//   return useMutation(createStudent, {
//     onSuccess: (data) => {
//       showSuccess("Signup successful");
//       console.log("Signup Succ:", data);
//     },
//     onError: (error) => {
//       console.log("Signup failed");
//       const errorMessage = error.response?.data?.message || "Something went wrong during signup";
//       showError(errorMessage);
//     },
//   });
// };

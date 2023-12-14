import { useMutation } from "react-query";
import { signup , login} from "./auth";
import { useRouter } from "next/navigation";
import { showSuccess,showError } from "../utlis/customToast";
import { setDataInStorage } from "../utlis/localstorage";
// import { setDataInStorage } from "../utlis/localstorage";
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

  

export const useLogin =()=>{
  const router = useRouter();

  return useMutation(login, {
    onSuccess: (data) => {
      console.log("Signup Succ:", data);
      showSuccess("Signup successful");
      setDataInStorage("token", data.token)
      setTimeout(()=>{

        router.push("/home");
      },1500)
    },
    onError: (error) => {
      showError("error.message");
      console.log("Signup failed");
      // const errorMessage = error.response?.data?.message || "Something went wrong during signup";
    },
  });
} 



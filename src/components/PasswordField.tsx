import { useToast } from "@chakra-ui/react";

import { useSelector } from "react-redux";

import { selectPassword } from "../store/passwordSlice";


export const PasswordField = () => {

  let reduxPassword = useSelector(selectPassword)
 

  const toast = useToast();
  const copyText = () => {
    navigator.clipboard.writeText(reduxPassword ? reduxPassword : "");
    return toast({
      title: "Copied To ClipBoard",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded">
      Generate Password
    </button>
  );
};

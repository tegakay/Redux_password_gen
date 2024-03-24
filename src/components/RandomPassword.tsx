
import { useToast } from "@chakra-ui/react";
import { generate } from '../api/generate';

export const RandomPassword = () => {
    
    let dummyPassword = ""
    const runapi = ()=>{
        let password = generate()
    }

    const toast = useToast();
    const copyText = () => {
      navigator.clipboard.writeText(dummyPassword ? dummyPassword : "");
      return toast({
        title: "Copied To ClipBoard",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };
  
    return (
        <button 
        onClick={runapi}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded">
        Generate Password
      </button>
    );
  
}

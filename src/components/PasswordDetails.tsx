import { useState } from "react";
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Stack,
} from "@chakra-ui/react";

import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { PasswordStrength } from "./PasswordStrength";
import { useToast } from "@chakra-ui/react";
 

import { useDispatch } from "react-redux";
import { set,selectPassword } from "../store/passwordSlice";
import { useSelector } from "react-redux";



interface formDatas {
  uppercase?: Boolean;
  lowercase?: Boolean;
  Numbers?: Boolean;
  Symbols?: Boolean;
}

export const PasswordDetails = () => {
  const [length, setLength] = useState(6);
  const [formData, setFormData] = useState<formDatas>();
  const [strength, setStrength] = useState(0);
  const toast = useToast();


  let password = useSelector(selectPassword)

  const dispatch = useDispatch()
  


  const setForm = (e: any) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.checked,
    }));
  };

  const GeneratePassword = () => {
    let lower = formData?.lowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
    let upper = formData?.uppercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
    let number = formData?.Numbers ? "0123456789" : "";
    let symbol = formData?.Symbols ? "!@#$%^&*(){}" : "";
    let chars = lower + upper + number + symbol;
    let newPassword = "";

    if (chars.length < 6) {
      return toast({
        title: "Error ",
        description: "Tick at least 1 checkbox",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }

    for (var i = 0; i <= length; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      newPassword += chars.substring(randomNumber, randomNumber + 1);
    }
    dispatch(set(newPassword));
    passwordValue()

  };

  const passwordValue = () => {
    let strength = 0;
    length > 8 ? strength++ : "";
    formData?.uppercase ? strength++ : "";
    formData?.lowercase ? strength++ : "";
    formData?.Numbers ? strength++ : "";
    formData?.Symbols ? strength++ : "";

    setStrength(strength);
    return strength;
  };



  return (
    <div className="  mx-auto">
      <h2> Character Length</h2>
      <div className="flex mx-auto gap-6">
        <RangeSlider
          aria-label={["min", "max"]}
          defaultValue={[6, 8]}
          min={6}
          max={32}
          colorScheme="pink"
          onChangeEnd={(val) => setLength(val[1])}
        >
          <RangeSliderTrack bg="red.100">
            <RangeSliderFilledTrack bg="black" />
          </RangeSliderTrack>
          <RangeSliderThumb boxSize={6} index={0} />
          <Box color="tomato"></Box>
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <div className="here">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {length}
          </span>
        </div>
      </div>
      <div>
        <CheckboxGroup
          colorScheme="green"
          // defaultValue={["uppercase", "lowercase"]}
        >
          <Stack spacing={[1, 5]} direction={["column"]}>
            <Checkbox value="uppercase" name="uppercase" onChange={setForm}>
              Include Uppercase Letters
            </Checkbox>
            <Checkbox value="lowercase" onChange={setForm} name="lowercase">
              Include Lowercase Letters
            </Checkbox>
            <Checkbox value="Numbers" onChange={setForm} name="Numbers">
              Include Numbers
            </Checkbox>
            <Checkbox value="Symbols" onChange={setForm} name="Symbols">
              Include Symbols
            </Checkbox>
          </Stack>
        </CheckboxGroup>
        {password && <PasswordStrength strength={strength} />}
        <button
          onClick={GeneratePassword}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

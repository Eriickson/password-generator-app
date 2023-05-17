import { Box, Center, Checkbox, HStack, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Check } from "react-feather";

interface CustomCheckboxProps {
  label: string;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <HStack cursor="pointer" w="max-content" onClick={() => setIsChecked((prev) => !prev)}>
      <Center
        bgColor={isChecked ? "brightgreen.500" : "transparent"}
        borderWidth="2px"
        borderColor="brightgreen.500"
        w="4"
        h="4"
        color={isChecked ? "backgroundcard.500" : "transparent"}
      >
        {isChecked && <Check strokeWidth="4.5" />}
      </Center>
      <Text userSelect="none" pr="1">
        {label}
      </Text>
    </HStack>
  );
};

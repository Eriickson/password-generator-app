import { Box, Center, Checkbox, HStack, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Check } from "react-feather";

export interface CustomCheckboxProps {
  label: string;
  onChange: (value: boolean) => void;
  defaultValue?: boolean;
  isDisabled?: boolean;
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({ isDisabled, defaultValue = false, label, onChange }) => {
  const [isChecked, setIsChecked] = useState(defaultValue);

  return (
    <HStack
      cursor="pointer"
      w="max-content"
      onClick={() => {
        const newValue = !isChecked;
        if (!isDisabled) {
          onChange(newValue);
          setIsChecked(newValue);
        }
      }}
    >
      <Center
        opacity={isDisabled ? 0.5 : 1}
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

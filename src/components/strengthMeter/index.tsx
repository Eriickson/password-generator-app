import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
interface StrengthMeterProps {
  passwordStrength: number;
}

export const StrengthMeter: FC<StrengthMeterProps> = ({ passwordStrength }) => {
  const passwordStrengthText = function () {
    // Range: 0 - 12
    // 1 - 3: Weak
    // 4 - 7: Medium
    // 8 - 10: Strong
    // 11 - 12: Very Strong
    if (passwordStrength <= 3) {
      return "Weak";
    }
    if (passwordStrength <= 7) {
      return "Medium";
    }
    if (passwordStrength <= 10) {
      return "Strong";
    }
    if (passwordStrength >= 12) {
      return "Very Strong";
    }
  };

  return (
    <Box bgColor="background.500" px="6" py="3.5">
      <Flex justifyContent="space-between">
        <Text opacity="0.5">STRENGHT</Text>
        <HStack>
          <Text opacity="0.85">{passwordStrengthText()}</Text>
          <HStack spacing="1" alignItems="center">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <Box
                  key={index}
                  w="1.5"
                  h="4"
                  borderColor="yellow.400"
                  borderWidth="1px"
                  bgColor={index < passwordStrength / 3 ? "yellow.400" : "transparent"}
                />
              ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

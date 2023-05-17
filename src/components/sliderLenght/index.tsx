import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface SliderLenghtProps {
  passwordLength: number;
}

export const SliderLenght: FC<SliderLenghtProps> = ({ passwordLength }) => {
  return (
    <Box userSelect="none">
      <Flex alignItems="center" justifyContent="space-between">
        <Text>Character Length</Text>
        <Text color="brightgreen.500" fontWeight="semibold" fontSize="xl">
          {passwordLength}
        </Text>
      </Flex>
    </Box>
  );
};

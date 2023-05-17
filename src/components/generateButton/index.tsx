import { Box, Center, Text } from "@chakra-ui/react";
import React, { FC, useState } from "react";

interface GenerateButtonProps {
  onClick(): void;
}

export const GenerateButton: FC<GenerateButtonProps> = ({ onClick }) => {
  return (
    <Box
      borderColor="brightgreen.500"
      py="2.5"
      borderWidth="2px"
      cursor="pointer"
      transition="150ms"
      onClick={onClick}
      _hover={{
        bgColor: "brightgreen.500",
        color: "background.500",
      }}
    >
      <Center>
        <Text userSelect="none" fontWeight="medium" textTransform="uppercase" transition="250ms">
          Generate -{">"}
        </Text>
      </Center>
    </Box>
  );
};

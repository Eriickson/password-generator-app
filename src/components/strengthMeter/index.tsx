import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";

export const StrengthMeter = () => {
  return (
    <Box bgColor="background.500" px="6" py="3.5">
      <Flex justifyContent="space-between">
        <Text opacity="0.5">STRENGHT</Text>
        <HStack>
          <Text opacity="0.85">MEDIUM</Text>
          <HStack spacing="1" alignItems="center">
            <Box w="1.5" h="4" borderColor="yellow.400" borderWidth="1px" bgColor="yellow.400" />
            <Box w="1.5" h="4" borderColor="yellow.400" borderWidth="1px" bgColor="yellow.400" />
            <Box w="1.5" h="4" borderColor="yellow.400" borderWidth="1px" bgColor="" />
            <Box w="1.5" h="4" borderColor="yellow.400" borderWidth="1px" bgColor="" />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

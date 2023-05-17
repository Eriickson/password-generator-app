import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const SliderLenght = () => {
  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between">
        <Text>Character Length</Text>
        <Text color="brightgreen.500" fontWeight="semibold" fontSize="xl">
          10
        </Text>
      </Flex>
    </Box>
  );
};

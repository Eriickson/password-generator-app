import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CopyButton } from "../copyButton";

export const ShowGeneratedPassword = () => {
  return (
    <Box mb="4" bgColor="backgroundcard.500" px="6" py="4">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="xl">
          O04g78E&S#G4T1*PvwWw
        </Text>
        <CopyButton />
      </Flex>
    </Box>
  );
};

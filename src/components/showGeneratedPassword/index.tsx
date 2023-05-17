import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { CopyButton } from "../copyButton";

interface ShowGeneratedPasswordProps {
  passwordGenerated: string;
}

export const ShowGeneratedPassword: FC<ShowGeneratedPasswordProps> = ({ passwordGenerated }) => {
  return (
    <Box mb="4" bgColor="backgroundcard.500" px="6" py="4">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold" fontSize="xl">
          {passwordGenerated}
        </Text>
        <CopyButton stringToCopy={passwordGenerated} />
      </Flex>
    </Box>
  );
};

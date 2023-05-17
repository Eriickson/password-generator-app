import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { ArrowRight } from "react-feather";

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
        <HStack>
          <Text
            userSelect="none"
            fontWeight="semibold"
            textTransform="uppercase"
            transition="250ms"
          >
            Generate
          </Text>
          <ArrowRight strokeWidth="3" size="1.25rem" />
        </HStack>
      </Center>
    </Box>
  );
};

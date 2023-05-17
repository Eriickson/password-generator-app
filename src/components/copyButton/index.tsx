import React, { FC, useState } from "react";

import { Clipboard, CheckSquare } from "react-feather";

import { Box, Center, HStack, Text, useToast } from "@chakra-ui/react";

interface CopyButtonProps {
  stringToCopy: string;
}

export const CopyButton: FC<CopyButtonProps> = ({ stringToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  const toast = useToast();

  async function handleClick() {
    await navigator.clipboard.writeText(stringToCopy);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);

    toast({
      title: "Copied to clipboard",
      position: "top-right",
      render(props) {
        return (
          <HStack p="4" bgColor="brightgreen.500">
            <CheckSquare size="1.25rem" />
            <Text>
              <strong>{props.title}</strong>
            </Text>
          </HStack>
        );
      },
    });
  }

  return (
    <Box
      onClick={!isCopied ? handleClick : undefined}
      transition="150ms"
      cursor="pointer"
      _hover={{ color: "brightgreen.500" }}
    >
      <Center h="full">{isCopied ? <CheckSquare size="1.25rem" /> : <Clipboard size="1.25rem" />}</Center>
    </Box>
  );
};

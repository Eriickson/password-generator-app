import React, { FC, useState } from "react";

import { Clipboard, CheckSquare } from "react-feather";

import { Box, Center } from "@chakra-ui/react";

interface CopyButtonProps {
  stringToCopy: string;
}

export const CopyButton: FC<CopyButtonProps> = ({ stringToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(stringToCopy);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
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

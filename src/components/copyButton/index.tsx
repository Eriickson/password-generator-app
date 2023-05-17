import { IconCopy } from "@/assets/icons/IconCopy";
import { colors } from "@/theme/colors";
import { Box, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { Clipboard } from "react-feather";

export const CopyButton = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      transition="150ms"
      cursor="pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      _hover={{ color: "brightgreen.500" }}
    >
      <Center h="full">
        {/* <IconCopy color={isHover ? colors.brightgreen[500] : "#FFFFFF"} /> */}
        <Clipboard size="1.25rem" />
      </Center>
    </Box>
  );
};

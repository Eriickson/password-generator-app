import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { CustomCheckbox } from "../customCheckbox";

export const RequirementsForm = () => {
  return (
    <Box>
      <Stack>
        <CustomCheckbox label="Include Uppercase Letters" />
        <CustomCheckbox label="Include Lowercase Letters" />
        <CustomCheckbox label="Include Numbers" />
        <CustomCheckbox label="Include Symbols" />
      </Stack>
    </Box>
  );
};

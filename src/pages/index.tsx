import { IconCopy } from "@/assets/icons/IconCopy";
import { CopyButton } from "@/components/copyButton";
import { CustomCheckbox } from "@/components/customCheckbox";
import { GenerateButton } from "@/components/generateButton";
import { RequirementsForm } from "@/components/requirementsForm";
import { ShowGeneratedPassword } from "@/components/showGeneratedPassword";
import { SliderLenght } from "@/components/sliderLenght";
import { StrengthMeter } from "@/components/strengthMeter";
import { Box, Center, Checkbox, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Copy } from "react-feather";

const HomePage = () => {
  return (
    <Box color="white" h="100vh" bgColor="background.500">
      <Center h="full">
        <Box minW="sm">
          <Text opacity={0.5} fontSize="xl" mb="4" textAlign="center">
            Password Generator
          </Text>
          <ShowGeneratedPassword />
          <Box bgColor="backgroundcard.500" px="5" py="5">
            <Stack spacing={5}>
              <SliderLenght />
              <RequirementsForm />
              <StrengthMeter />
              <GenerateButton onClick={() => {}} />
            </Stack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default HomePage;

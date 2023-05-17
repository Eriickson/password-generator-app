import React, { useCallback, useEffect, useState } from "react";

import { Box, Center, Stack, Text } from "@chakra-ui/react";

import { GenerateButton } from "@/components/generateButton";
import { RequirementsForm } from "@/components/requirementsForm";
import { ShowGeneratedPassword } from "@/components/showGeneratedPassword";
import { Slider } from "@/components/slider";
import { SliderLenght } from "@/components/sliderLenght";
import { StrengthMeter } from "@/components/strengthMeter";
import { RequirementsFormValues } from "@password-generator";
import { generateRandomString } from "@/utils/generateRandomString";

export const HomeTemplate = () => {
  const [passwordGenerated, setpasswordGenerated] = useState("");
  const [passwordLength, setPasswordLength] = useState(6);
  const [requirementsForm, setRequirementsForm] = useState<RequirementsFormValues>({
    includeLowercase: true,
    includeNumbers: true,
    includeSymbols: false,
    includeUppercase: true,
  });

  const generatePassword = useCallback(() => {
    const passwordGenerated = generateRandomString({
      ...requirementsForm,
      length: passwordLength,
    });
    setpasswordGenerated(passwordGenerated);
  }, [passwordLength, requirementsForm]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <Box color="white" h="100vh" bgColor="background.500">
      <Center h="full">
        <Box minW="sm">
          <Text opacity={0.5} fontSize="xl" mb="4" textAlign="center">
            Password Generator
          </Text>
          <ShowGeneratedPassword passwordGenerated={passwordGenerated} />
          <Box bgColor="backgroundcard.500" px="5" py="5">
            <Stack spacing={5}>
              <Stack>
                <SliderLenght passwordLength={passwordLength} />
                <Slider onChange={setPasswordLength} />
              </Stack>
              <RequirementsForm
                requirementsForm={requirementsForm}
                onChange={(value) => setRequirementsForm((prev) => ({ ...prev, ...value }))}
              />
              <StrengthMeter />
              <GenerateButton onClick={generatePassword} />
            </Stack>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

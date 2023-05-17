import { IconCopy } from "@/assets/icons/IconCopy";
import { CopyButton } from "@/components/copyButton";
import { CustomCheckbox } from "@/components/customCheckbox";
import { GenerateButton } from "@/components/generateButton";
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
          <Box mb="4" bgColor="backgroundcard.500" px="6" py="4">
            <Flex alignItems="center" justifyContent="space-between">
              <Text fontWeight="semibold" fontSize="xl">
                O04g78E&S#G4T1*Pvw
              </Text>
              <CopyButton />
            </Flex>
          </Box>
          <Box bgColor="backgroundcard.500" px="5" py="5">
            <Box mb="5">
              <Stack>
                <CustomCheckbox label="Include Uppercase Letters" />
                <CustomCheckbox label="Include Lowercase Letters" />
                <CustomCheckbox label="Include Numbers" />
                <CustomCheckbox label="Include Symbols" />
              </Stack>
            </Box>
            <Box bgColor="background.500" mb="5" px="6" py="3.5">
              <Flex justifyContent="space-between">
                <Text opacity="0.5">STRENGHT</Text>
                <HStack>
                  <Text opacity="0.85">MEDIUM</Text>
                  <HStack spacing="1" alignItems="center">
                    <Box
                      w="1.5"
                      h="4"
                      borderColor="yellow.400"
                      borderWidth="1px"
                      bgColor="yellow.400"
                    />
                    <Box
                      w="1.5"
                      h="4"
                      borderColor="yellow.400"
                      borderWidth="1px"
                      bgColor="yellow.400"
                    />
                    <Box w="1.5" h="4" borderColor="yellow.400" borderWidth="1px" bgColor="" />
                    <Box w="1.5" h="4" borderColor="yellow.400" borderWidth="1px" bgColor="" />
                  </HStack>
                </HStack>
              </Flex>
            </Box>
            <GenerateButton onClick={() => {}} />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default HomePage;

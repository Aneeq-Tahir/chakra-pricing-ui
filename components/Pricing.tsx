import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  StackProps,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon } from "@/icons/Icons";

export function ListItem(props: StackProps) {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon w="22px" h="22px" as={CheckIcon} />
      <Text>{children}</Text>
    </HStack>
  );
}

export default function Pricing() {
  return (
    <>
      <Box
        maxW={'62.125rem'}
        m={"auto"}
        mt={'-72'}
        borderRadius={"xl"}
        overflow={"hidden"}
        boxShadow={"xl"}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          // justify={"center"}
          // align={"center"}
        >
          <Box textAlign={"center"} bg="teal.50" p="14">
            <Text fontSize={"2xl"} fontWeight="extrabold">
              Premium Pro
            </Text>
            <Heading as="h3" fontSize="6xl">
              $329
            </Heading>
            <Text fontSize="lg" fontWeight="extrabold" mt="2">
              Billed just once
            </Text>
            <Button
              color={"white"}
              colorScheme="teal"
              size="lg"
              w="64"
              mt="24px"
            >
              Get Started
            </Button>
          </Box>
          <Box bg={"white"} p={"60px"} fontSize={"18px"}>
            <Text>
              Access these features when you get this pricing package for your
              business
            </Text>
            <Stack as={"ul"} spacing="20px" pt="24px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

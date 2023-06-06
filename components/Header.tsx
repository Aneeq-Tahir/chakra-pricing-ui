import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="section" pb={"28"}>
      <Box
        textAlign={"center"}
        pt="90px"
        pb="198px"
        px={"8"}
        bg="teal.400"
        color="gray.50"
      >
        <Heading fontWeight={"extrabold"} fontSize={"5xl"}>
          Simple Pricing For Your Business
        </Heading>
        <Text fontWeight={"medium"} pt={"4"} fontSize="2xl">
          Plans that are crafted carefully to suit your business
        </Text>
      </Box>
    </Box>
  );
}

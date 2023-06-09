import { HassleFree, MoneyBack, MonthlySubscription } from "@/icons/Icons";
import { Icon, HStack, StackProps, Text, Stack, Box } from "@chakra-ui/react";
import React, { ElementType } from "react";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack as={"li"} {...rest} spacing={"6"}>
      <Icon as={icon} />
      <Text>{children}</Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box pt={"20px"} pb={"8"}>
      <Stack
        as={"ul"}
        direction={{ base: "column", md: "row" }}
        spacing={"5"}
        justify={"center"}
        align={"center"}
      >
        <Feature icon={MoneyBack}>30 days money back guarantee</Feature>
        <Feature icon={HassleFree}>No setup fees, 100% hassle free</Feature>
        <Feature width={'18.5rem'} icon={MonthlySubscription}>
          No Monthly subscription, Pay once and for all
        </Feature>
      </Stack>
    </Box>
  );
}

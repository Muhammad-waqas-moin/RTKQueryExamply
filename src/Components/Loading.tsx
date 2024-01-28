import { Box, Flex } from "@chakra-ui/react";

import { Bars } from "react-loading-icons";
const Loading = () => {
  return (
    <Box maxWidth={"full"} bg="gray.200">
      <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Bars strokeOpacity={0.125} fill=" #FF5733" />
      </Flex>
    </Box>
  );
};

export default Loading;

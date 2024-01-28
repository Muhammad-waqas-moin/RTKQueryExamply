import { Box, Flex } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
const Error = () => {
  return (
    <Box maxWidth={"full"} bg={"gray.200"}>
      <Flex h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <Player
          autoplay
          loop
          src="https://lottie.host/fd937025-b234-497e-89c5-a56de80da3f7/9s2UWPqAeu.json"
          //   style={{ height: "300px", width: "300px" }}
        />
      </Flex>
    </Box>
  );
};

export default Error;

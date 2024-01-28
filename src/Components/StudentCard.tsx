// import {
//   Heading,
//   Text,
//   Divider,
//   Container,
//   Flex,
//   HStack,
//   Stack,
//   VStack,
//   Card,
//   CardBody,
// } from "@chakra-ui/react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import { useGetStudentsQuery } from "../features/StudentApi";
// const StudentCard = () => {
//   const { data } = useGetStudentsQuery();

//   return (
//     <Container
//       bg={"gray.200"}
//       maxWidth={{ base: "container.lg", md: "full" }}
//       p={{ base: "10", md: "30" }}
//       h={"auto"}
//     >
//       <Flex
//         h={"100vh"}
//         flexDirection={{
//           base: "column",
//           md: "row",
//           //   sm: "column",
//           //   md: "row",
//         }}
//       >
//         <VStack bg={"red.200"}>
//           {data &&
//             data?.map((item, index) => (
//               <Card key={index} maxW="sm">
//                 <CardBody>
//                   <Player
//                     autoplay
//                     loop
//                     src="https://lottie.host/ad431c78-81c1-4d94-bb65-a0ad4a05a132/jcO5OGuYNt.json"
//                     style={{ height: "300px", width: "300px" }}
//                   ></Player>
//                   <Stack mt="6" spacing="3">
//                     <Heading size="md">{item?.studentName}</Heading>
//                     <Text>{item?.studentEmail}</Text>
//                   </Stack>
//                 </CardBody>
//               </Card>
//             ))}
//         </VStack>
//       </Flex>
//     </Container>
//   );
// };

// export default StudentCard;
// import {
//   Heading,
//   Text,
//   Container,
//   Flex,
//   VStack,
//   Card,
//   CardBody,
// } from "@chakra-ui/react";
// import { Player } from "@lottiefiles/react-lottie-player";
// import { useGetStudentsQuery } from "../features/StudentApi";

// const StudentCard = () => {
//   const { data } = useGetStudentsQuery();

//   return (
//     <Container
//       bg="gray.200"
//       maxWidth={{ base: "container.lg", md: "full" }}
//       p={{ base: "10", md: "30" }}
//       h="auto"
//     >
//       <Flex
//         h={{ base: "auto", md: "100vh" }}
//         flexDirection={{ base: "column", md: "row" }}
//       >
//         <VStack spacing={4} align="center">
//           {data &&
//             data.map((item, index) => (
//               <Card key={index} maxW="sm" boxShadow="lg">
//                 <CardBody>
//                   <Player
//                     autoplay
//                     loop
//                     src="https://lottie.host/ad431c78-81c1-4d94-bb65-a0ad4a05a132/jcO5OGuYNt.json"
//                     style={{ height: "300px", width: "300px" }}
//                   />
//                   <VStack mt={6} spacing={3} align="center">
//                     <Heading size="md">{item?.studentName}</Heading>
//                     <Text>{item?.studentEmail}</Text>
//                   </VStack>
//                 </CardBody>
//               </Card>
//             ))}
//         </VStack>
//       </Flex>
//     </Container>
//   );
// };

// export default StudentCard;

import {
  Heading,
  Text,
  Container,
  Flex,
  VStack,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  useDeleteStudentMutation,
  useGetStudentsQuery,
} from "../features/StudentApi";
import Loading from "./Loading";
import Error from "./Error";
import { NavLink } from "react-router-dom";

const StudentCard = () => {
  const { data, isLoading, isError, isSuccess } = useGetStudentsQuery();
  const [deleteStudent] = useDeleteStudentMutation();

  return (
    <Container bg="gray.200" maxW={{ base: "Container.lg", md: "full" }}>
      {isLoading && <Loading />}
      {isError && <Error />}

      <Flex
        flexWrap={{ base: "wrap", md: "nowrap" }}
        // justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {isSuccess &&
          data.map((item, index) => (
            <Card
              key={index}
              //   maxW={{ base: "sm", md: "full" }}
              boxShadow="lg"
              m={4}
            >
              <CardBody>
                <Player
                  autoplay
                  loop
                  src="https://lottie.host/ad431c78-81c1-4d94-bb65-a0ad4a05a132/jcO5OGuYNt.json"
                  //   style={{ height: "300px", width: "300px" }}
                />
                <VStack
                  alignItems={"flex-start"}
                  mt={6}
                  spacing={3}
                  pl={4}
                  align="center"
                >
                  <Heading size="md">{item?.studentName}</Heading>
                  <Text>{item?.studentEmail}</Text>
                </VStack>
                <Button
                  onClick={() => deleteStudent(item?.id)}
                  mt={4}
                  colorScheme="teal"
                >
                  <i className="fa-solid fa-trash"></i>
                </Button>
                <Button
                  //   onClick={() => deleteStudent(item?.id)}
                  mt={4}
                  colorScheme="teal"
                >
                  <NavLink to={`edit/${item?.id}`}>
                    <i className="fa-solid fa-pencil"></i>
                  </NavLink>
                </Button>
              </CardBody>
            </Card>
          ))}
      </Flex>
    </Container>
  );
};

export default StudentCard;

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Student } from "../models/studdent.model";
import {
  useAddStudentMutation,
  useGetStudentQuery,
  useUpdateStudentMutation,
} from "../features/StudentApi";
import { useNavigate, useParams } from "react-router-dom";

const AddEdit = () => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [updateStudent] = useUpdateStudentMutation();
  const [addStudent] = useAddStudentMutation();
  const [students, setStudent] = useState<Student>(Object);
  const [editMode, setEditMode] = useState<boolean>(false);
  const { data } = useGetStudentQuery(id!);
  ("! here tells typescript that id is not undefined");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudent({ ...students, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editMode) {
      await updateStudent(students);
    } else {
      await addStudent(students);
    }
    setEditMode(false);
    navigation("/");
  };
  // console.log("data", data);
  useEffect(() => {
    if (id && data) {
      setEditMode(true);
      setStudent({ ...data });
    } else {
      setEditMode(false);
    }
  }, [id, data]);
  return (
    <Box h={"100vh"} maxW="full" bg="gray.200">
      <Flex justifyContent={"center"} alignItems={"center"}>
        <VStack rounded={"20"} p={10} width="50%" bg="white">
          <FormControl isRequired>
            <FormLabel>Student name</FormLabel>
            <Input
              name="studentName"
              onChange={handleChange}
              placeholder="First name"
              value={students?.studentName || ""}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Student Email</FormLabel>
            <Input
              name="studentEmail"
              onChange={handleChange}
              placeholder="email"
              value={students?.studentEmail || ""}
            />
          </FormControl>
          <FormControl>
            <Button
              onClick={handleSubmit}
              mt={4}
              colorScheme="teal"
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </VStack>
      </Flex>
    </Box>
  );
};

export default AddEdit;

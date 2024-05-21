import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Select, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function UserForm() {
  const navigate = useNavigate();
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    entreprise_id: "",
    etablissement_id: "",
    region_id: "",
  });
  const toast = useToast();

  const handleChange = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
    console.log("Updated UserData:", UserData); // Debugging line
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting UserData:", UserData); // Debugging line
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', UserData);
      toast({
        title: "User created.",
        description: "User account has been created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate('/success');
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while creating the user.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Failed to submit user data", error);
      console.log(UserData)
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="gray.50">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" value={UserData.name} onChange={handleChange} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={UserData.email} onChange={handleChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" value={UserData.password} onChange={handleChange} />
          </FormControl>
          <FormControl id="role">
            <FormLabel>Role</FormLabel>
            <Select name="role" value={UserData.role} onChange={handleChange}>
              <option value="">Select role</option>
              <option value="regional">regional</option>
              <option value="central">central</option>
              <option value="local">local</option>
              <option value="consultant">consultant entreprise</option>
              <option value="intervenant">intervenant</option>
            </Select>
          </FormControl>
          <FormControl id="entreprise_id">
            <FormLabel>Entreprise</FormLabel>
            <Input type="text" name="entreprise_id" value={UserData.entreprise_id} onChange={handleChange} />
          </FormControl>
          <FormControl id="etablissement_id">
            <FormLabel>Etablissement</FormLabel>
            <Input type="text" name="etablissement_id" value={UserData.etablissement_id} onChange={handleChange} />
          </FormControl>
          <FormControl id="region_id">
            <FormLabel>Region</FormLabel>
            <Input type="text" name="region_id" value={UserData.region_id} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full" mt={4}>
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default UserForm;

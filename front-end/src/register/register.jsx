import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Select, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function UserForm() {
  const navigate = useNavigate();
  const [UserData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role_id: "",
    entreprise_id: "",
    etablissement_id: "",
    region_id: "",
  });
  const toast = useToast();


  const handleChange = (e) => {
    setUserData({ ...UserData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={5} borderWidth={1} borderRadius="lg">
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
          <FormControl id="role_id">
            <FormLabel>Role ID</FormLabel>
            <Input type="text" name="role_id" value={UserData.role_id} onChange={handleChange} />
          </FormControl>
          <FormControl id="entreprise_id">
            <FormLabel>Entreprise ID</FormLabel>
            <Input type="text" name="entreprise_id" value={UserData.entreprise_id} onChange={handleChange} />
          </FormControl>
          <FormControl id="etablissement_id">
            <FormLabel>Etablissement ID</FormLabel>
            <Input type="text" name="etablissement_id" value={UserData.etablissement_id} onChange={handleChange} />
          </FormControl>
          <FormControl id="region_id">
            <FormLabel>Region ID</FormLabel>
            <Input type="text" name="region_id" value={UserData.region_id} onChange={handleChange} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default UserForm;

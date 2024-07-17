import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserTie, FaKey } from "react-icons/fa";
import React, { useState } from 'react';
import { login } from './api/auth';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  Image,
  useToast
} from '@chakra-ui/react';

const Login = () => {
  const sessionOptions = ["2024-25", "2025-26", "2026-27"];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();

  const handleSubmit = async () => {
    setError('');
    try {
      const response = await login({ username, password });
      localStorage.setItem('token', response.token);
      window.location.href = '/';
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Login failed');
      toast({
        title: "Login failed",
        description: err.message || 'Login failed',
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      height="100vh"
      bg="gray.100"
      px={4} // padding for horizontal responsiveness
    >
      <Box
        bg="white"
        p={8}
        rounded="lg"
        boxShadow="lg"
        width={{ base: "100%", md: "80%", lg: "60%" }}
        maxWidth="600px"
      >
        <Flex direction={{ base: "column", md: "row" }} align="center">
          <Box flex="1" textAlign="center" mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
            <Image src="/logo192.png" alt="logo" width="100px" margin="auto" />
          </Box>
          <VStack spacing={4} flex="2" align="stretch">
            <Text fontSize="2xl" fontWeight="bold" color="purple.500">Log In</Text>
            <FormControl id="username" isRequired>
              <FormLabel>Username</FormLabel>
              <Input
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </FormControl>
            <FormControl id="session" isRequired>
              <FormLabel>Session</FormLabel>
              <Select placeholder="Select session">
                {sessionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
            {error && <Text color="red.500">{error}</Text>}
            <Button colorScheme="purple" width="full" onClick={handleSubmit}>
              Login
            </Button>
            <Link to="/forgotpwd" style={{ color: "purple.500", textAlign: "right" }}>
              Forgot Password?
            </Link>
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Login;

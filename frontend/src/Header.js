import React, {useState,useEffect} from 'react';
import { Flex, Text, Link, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    // handleSuccess('User Loggedout');
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <Flex as="header" justify="space-between" align="center" padding={4} bg="purple.500" color="white">
      <Text fontSize="xl" fontWeight="bold">My App</Text>
      <Flex>
        <Link mr={4} color="white">Home</Link>
        <Link mr={4} color="white">Dashboard</Link>
        <Button color="Black" onClick={handleLogout}>Logout</Button>
      </Flex>
    </Flex>
  );
};

export default Header;

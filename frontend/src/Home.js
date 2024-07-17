import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Dashboard from './Dashboard';
import Footer from './Footer';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Flex flex="1">
        <Dashboard />
      </Flex>
      <Footer />
    </Flex>
  );
};

export default Home;

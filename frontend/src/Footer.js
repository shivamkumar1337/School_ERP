import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" justify="center" align="center" padding={4} bg="gray.200">
      <Text fontSize="sm">&copy; 2024 School Erp. All rights reserved.</Text>
    </Flex>
  );
};

export default Footer;

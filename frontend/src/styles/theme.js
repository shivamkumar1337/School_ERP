import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f3f4ff',
      100: '#d4d7fc',
      200: '#b5baf8',
      300: '#969df4',
      400: '#787ff0',
      500: '#615efc', // primary color
      600: '#4b49d8',
      700: '#362fa5',
      800: '#201f73',
      900: '#0c0a41',
    },
    gray: {
      50: '#f9fafb',
      100: '#f0f1f3',
      200: '#d9dbe1',
      300: '#c2c6cf',
      400: '#abb2bf',
      500: '#959ea9',
      600: '#7d8796',
      700: '#656f7f',
      800: '#4e5969',
      900: '#373f4b',
    },
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
    mono: 'Menlo, monospace',
  },
  breakpoints: {
    sm: '30em', // 480px
    md: '48em', // 768px
    lg: '62em', // 992px
    xl: '80em', // 1280px
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.100',
        color: 'gray.800',
      },
    },
  },
});

export default theme;

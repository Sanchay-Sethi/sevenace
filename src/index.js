import React from 'react';
import {ChakraProvider,ColorModeScript} from '@chakra-ui/react'
import ReactDOM from 'react-dom';
import App from './App';
import { ToastProvider } from "react-toast-notifications";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode="dark"></ColorModeScript>
    <ToastProvider
              autoDismiss={true}
              TransitionState="entered"
              autoDismissTimeout="2000"
              placement="top-right"
            >
      <App />
      </ToastProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

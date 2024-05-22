import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

import shan from "./Assets/shan.jpg"

const steps = [
  {
    id: '1',
    message: 'What is your name?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: '4',
  },
  {
    id: '4',
    message: 'How can I assist you today?',
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'View Products', trigger: 'viewProducts' },
      { value: 2, label: 'Place an Order', trigger: 'placeOrder' },
      { value: 3, label: 'Get Help', trigger: 'getHelp' },
    ],
  },
  {
    id: 'viewProducts',
    message: 'Great! Here are our available products:',
    // Add logic to display products here
    end: true,
  },
  {
    id: 'placeOrder',
    message: 'Let me assist you with placing an order.',
    // Add logic for order placement here
    end: true,
  },
  {
    id: 'getHelp',
    message: 'Sure! How can I assist you further?',
    trigger: '5', // Go back to the main menu
  },
];


const theme = {
  background: '#EEF7F6',
  headerBgColor: '#539537',
  headerFontSize: '20px',
  botBubbleColor: '#3A81AF',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#F2F2F2',
  userFontColor: 'black',
};

const config = {
  botAvatar: shan,
  floating: true,
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="Do you want to talk to me?"
          steps={steps}
          {...config}
        />
      </ThemeProvider>
    </>
  );
}

export default App;

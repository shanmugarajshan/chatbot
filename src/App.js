import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { UisCornerRightDown } from '@iconscout/react-unicons-solid'

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
    message: "Let's be friends.?",
    trigger: '5',
  },
  {
    id: '5',
    options: [
      { value: 1, label: 'Ok', trigger: 'ok' },
      { value: 2, label: 'No', trigger: 'no' },
    ],
  },
  {
    id: 'ok',
    message: 'you can send a "hi" message on WhatsApp',
    // Add logic to display products here
    trigger: '6',
  },
  {
    id: 'no',
    message: 'Ignore',
    // Add logic for order placement here
    trigger: '7',
  },
  {
    id: '6',
    message: "Let me know more about you",
    end: true,
  },
  {
    id: '7',
    message: "anyways it's okay",
    end: true,
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
    <div>      
    <UisCornerRightDown>
    <i class="uis uis-corner-right-down"></i>
    </UisCornerRightDown>
    </div>
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

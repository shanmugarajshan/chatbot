declare module 'react-simple-chatbot' {
    import { ComponentType } from 'react';
  
    export interface ChatBotProps {
      steps: Array<{
        id: string | number;
        message?: string;
        trigger?: string | number;
        user?: boolean;
        options?: Array<{ value: string | number; label: string; trigger: string | number }>;
        end?: boolean;
      }>;
      botAvatar?: string;
      floating?: boolean;
      headerTitle?: string;
    }
  
    const ChatBot: ComponentType<ChatBotProps>;
    export default ChatBot;
  }
  
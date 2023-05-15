import { useContext } from 'react';
import { ChatContext } from './Chat.context';

export default function useChat() {
  const context = useContext(ChatContext)
  if (!context) throw new Error('Whitout chat context')
  return context
}
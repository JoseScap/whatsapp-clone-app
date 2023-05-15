import { useContext } from 'react';
import { ProfileContext } from './Profile.context';

export default function useProfile() {
  const context = useContext(ProfileContext)
  if (!context) throw new Error('Whitout profile context')
  return context
}
import { ChatPreview } from '../../components';

export default {
  title: 'Components/ChatPreview',
  component: ChatPreview,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    avatarColor: { control: 'color' },
    lastMessage: { control: 'color' },
  }
}

export const Primary = {
  args: {
    name: 'Jhon Doe',
    avatarColor: '#47d5bc',
    lastMessage: 'Lorem ipsum dolor'
  }
}
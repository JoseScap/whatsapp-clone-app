import { ChatPreview } from '../../components';

export default {
  title: 'Components/ChatPreview',
  component: ChatPreview,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    color: { control: 'color' },
    lastMessage: { control: 'color' },
  }
}

export const Primary = {
  args: {
    name: 'Jhon Doe',
    color: '#47d5bc',
    lastMessage: 'Lorem ipsum dolor'
  }
}
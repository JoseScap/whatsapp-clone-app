import { LeftSidebar } from '../../components';

export default {
  title: 'Components/LeftSidebar',
  component: LeftSidebar,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    avatarColor: { control: 'text' },
    chatList: { control: 'object' }
  }
}

export const Primary = {
  args: {
    name: 'Juan',
    avatarColor: '#47d5bc',
    chatList: [
      {
        uuid: 1,
        avatarColor: '#47d5bc',
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: 2,
        avatarColor: '#47d5bc',
        name: 'Jane Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: 3,
        avatarColor: '#47d5bc',
        name: 'Jack Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: 4,
        avatarColor: '#47d5bc',
        name: 'Jhon De',
        lastMessage: 'Lorem ipsum dolor'
      }
    ]
  }
}
import { ChatList } from '../../components';

export default {
  title: 'Components/ChatList',
  component: ChatList,
  tags: ['autodocs'],
  argTypes: {
    chatList: { control: 'object' }
  }
}

export const Primary = {
  args: {
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
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: 3,
        avatarColor: '#47d5bc',
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: 4,
        avatarColor: '#47d5bc',
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      }
    ]
  }
}
import { LeftSidebar } from '../../components';
import { v4 } from 'uuid'

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
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jane Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jack Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon De',
        lastMessage: 'Lorem ipsum dolor'
      }
    ]
  }
}

export const PrimaryWithScroll = {
  args: {
    name: 'Juan',
    avatarColor: '#47d5bc',
    chatList: [
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jane Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jack Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon De',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jane Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jack Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon De',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jane Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jack Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon De',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jane Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jack Doe',
        lastMessage: 'Lorem ipsum dolor'
      },
      {
        uuid: v4(),
        avatarColor: '#47d5bc',
        name: 'Jhon De',
        lastMessage: 'Lorem ipsum dolor'
      },
    ]
  }
}
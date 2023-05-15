import { ChatArea } from '../../components';
import { v4 } from 'uuid'

export default {
  title: 'Components/ChatArea',
  component: ChatArea,
  tags: ['autodocs'],
  argTypes: {
  }
}

export const Primary = {
  args: {
    messages: [
      {
        uuid: v4(),
        username: 'Jane Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timestamp: '10:20 pm',
        mine: false
      },
      {
        uuid: v4(),
        username: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timestamp: '05:18 am',
        mine: true
      },
      {
        uuid: v4(),
        username: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timestamp: '05:18 am',
        mine: true
      },
      {
        uuid: v4(),
        username: 'Jane Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timestamp: '10:20 pm',
        mine: false
      },
      {
        uuid: v4(),
        username: 'Jane Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timestamp: '10:20 pm',
        mine: false
      },{
        uuid: v4(),
        username: 'Jane Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timestamp: '10:20 pm',
        mine: false
      },
      {
        uuid: v4(),
        username: 'John Doe',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        timestamp: '05:18 am',
        mine: true
      },
    ]
  }
}
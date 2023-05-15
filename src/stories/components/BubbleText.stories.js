import { BubbleText } from '../../components';

export default {
  title: 'Components/BubbleText',
  component: BubbleText,
  tags: ['autodocs'],
  argTypes: {
    username: { control: 'text' },
    text: { control: 'text' },
    timestamp: { control: 'text' },
    alt: { control: 'boolean' },
  }
}

export const Primary = {
  args: {
    username: 'Jane Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    timestamp: '10:20 pm',
    mine: false
  }
}

export const Alternated = {
  args: {
    username: 'Jane Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    timestamp: '10:20 pm',
    mine: true
  }
}
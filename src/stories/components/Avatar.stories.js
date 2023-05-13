import { Avatar } from '../../components';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: 'number' }
  }
}

export const Primary = {
  args: {
    color: '#47d5bc',
    size: 40
  }
}
import { Avatar } from '../../components';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    image: { control: 'text' },
    alt: { control: 'text' }
  }
}

export const Primary = {
  args: {
    image: 'https://yt3.googleusercontent.com/ytc/AGIKgqNGxs8XAfudsOFr9KhpeQ_JwoIcvSJFLVRQeASp9g=s900-c-k-c0x00ffffff-no-rj',
    alt: 'Smile face'
  }
}
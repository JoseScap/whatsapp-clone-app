import { Topbar } from '../../components';

export default {
  title: 'Components/Topbar',
  component: Topbar,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    avatarColor: { control: 'color' },
  }
}

export const Primary = {
  args: {
    name: 'Jhon Doe',
    avatarColor: '#47d5bc',
  }
}
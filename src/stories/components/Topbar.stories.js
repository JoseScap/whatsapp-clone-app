import { Topbar } from '../../components';

export default {
  title: 'Components/Topbar',
  component: Topbar,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    color: { control: 'color' },
  }
}

export const Primary = {
  args: {
    name: 'Jhon Doe',
    color: '#47d5bc',
  }
}
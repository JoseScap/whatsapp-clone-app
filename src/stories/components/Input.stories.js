import { Input } from '../../components';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    search: { control: 'boolean' },
    value: { control: 'text' }
  }
}

export const Primary = {
  args: {
    search: false,
    value: 'Lorem ipsum dolor',
  }
}
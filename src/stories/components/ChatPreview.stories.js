import { ChatPreview } from '../../components';

export default {
  title: 'Components/ChatPreview',
  component: ChatPreview,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    avatarColor: { control: 'color' },
    lastMessage: { control: 'color' },
  }
}

export const Primary = {
  args: {
    name: 'Jhon Doe',
    avatarColor: '#47d5bc',
    lastMessage: 'Lorem ipsum dolor'
  }
}

export const PrimaryWithClamp = {
  args: {
    name: 'Jhon Doe',
    avatarColor: '#47d5bc',
    lastMessage: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Tempora laudantium sapiente eaque consequatur debitis officiis, ut possimus
    necessitatibus modi recusandae temporibus cum in suscipit sequi? Neque sint
    natus cumque tempore.`
  }
}
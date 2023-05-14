import Avatar from './Avatar'
import PropTypes from 'prop-types'

function Topbar(props) {
  const { name, avatarColor } = props

  return <div className={$containerClasses} style={$containerStyle}>
    <div className={$itemsWrapper}>
      <Avatar
        color={avatarColor}
        size={40}
      />
      <h2>{name}</h2>
    </div>
  </div>
}

const $containerClasses = 'h-16 px-4 bg-gray-600'
const $containerStyle = { maxHeight: 80 }

const $itemsWrapper = 'flex h-full w-full items-center justify-between text-white'

Topbar.propTypes = {
  name: PropTypes.string.isRequired,
  avatarColor: PropTypes.string.isRequired
}

export default Topbar
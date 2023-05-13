import Avatar from './Avatar'
import PropTypes from 'prop-types'

function Topbar(props) {
  const { name, color } = props

  return <div className={$containerClasses} style={$containerStyle}>
    <div className={$itemsWrapper}>
      <Avatar
        color={color}
        size={40}
      />
      <h2>{name}</h2>
    </div>
  </div>
}

const $containerClasses = 'border h-16 px-4 bg-gray-700'
const $containerStyle = { maxHeight: 80 }

const $itemsWrapper = 'flex h-full w-full items-center justify-between'

Topbar.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Topbar
import PropTypes from 'prop-types'
import { useMemo } from 'react'

function Avatar(props) {
  // Props --------------------------------------
  const { color } = props

  // Hooks --------------------------------------
  const avatarStyle = useMemo(() => {
    return {
      ...$containerStyle,
      backgroundColor: color ? color : '#000000',
      borderColor: color ? color : '#000000',
    }
  }, [color])

  return <div className={$containerClasses} style={avatarStyle}>
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
  </div>
}

const $containerClasses = 'rounded-full inline-flex border overflow-hidden w-full justify-center items-center text-white'
const $containerStyle = {
  aspectRatio: '1/1',
  maxWidth: 80,
}

Avatar.propTypes = {
  color: PropTypes.string
}

export default Avatar
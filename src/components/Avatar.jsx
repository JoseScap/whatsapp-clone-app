import PropTypes from 'prop-types'

function Avatar(props) {
  const {
    image,
    alt
  } = props

  return <div style={$container}>
    <img
      src={image}
      alt={alt}
      style={$image}
    />
  </div>
}

const $image = {
  width: '100%',
  height: '100%',
  maxWidth: 80 
}

const $container = {
  borderRadius: '50%',
  display: 'inline-block',
  aspectRatio: '1/1',
  border: '1px solid black',
  overflow: 'hidden',
  width: '100%',
  maxWidth: 80
}

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
}

export default Avatar
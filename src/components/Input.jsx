import PropTypes from 'prop-types'

function Input(props) {
  const { search = false, value, onChange } = props

  return <div className={$container}>
    {
      search && (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search text-gray-100 mr-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      )
    }
    <input
      className={$inputClasses}
      style={$inputStyle}
      value={value}
      onChange={onChange}
    />
  </div>
}

const $container = 'border bg-gray-400 rounded-lg h-9 overflow-hidden flex flex-row items-center px-4'

const $inputClasses = 'outline-none h-full w-full bg-transparent text-gray-100'
const $inputStyle = {
  caretColor: 'rgb(229, 231, 235)'
}

Input.propTypes = {
  search: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Input
import { useCallback, useState } from 'react'
import { Input } from '../components'
import AnimateHeight from 'react-animate-height'
import { HandClickIcon } from '../components/Icon'
import { useNavigate } from 'react-router-dom'

const initialLoginValues = {
  username: '',
  password: ''
}

const initialRegisterValues = {
  username: '',
  password: '',
  repeat: ''
}

function Auth() {
  const navigate = useNavigate()
  const [ loginHeight, setLoginHeight ] = useState(0)
  const [ signUpHeight, setSignUpHeight ] = useState(0)
  const [ loginValues, setLoginValues ] = useState(initialLoginValues)
  const [ registerValues, setRegisterValues ] = useState(initialRegisterValues)

  const handleLoginHeight = useCallback(() => {
    setLoginHeight(oldValue => oldValue === 0 ? 'auto' : 0)
    setSignUpHeight(0)
  }, [setLoginHeight])

  const handleSignUpHeight = useCallback(() => {
    setSignUpHeight(oldValue => oldValue === 0 ? 'auto' : 0)
    setLoginHeight(0)
  }, [setLoginHeight])

  const handleLoginValues = useCallback((value, name) => {
    setLoginValues(oldValues => ({
      ...oldValues,
      [name]: value
    }))
  }, [])

  const handleRegisterValues = useCallback((value, name) => {
    setRegisterValues(oldValues => ({
      ...oldValues,
      [name]: value
    }))
  }, [setRegisterValues])

  const handleLoginSubmit = useCallback((event) => {
    event.preventDefault()
    console.log(loginValues)
    navigate('/')
  }, [loginValues, navigate])

  const handleRegisterSubmit = useCallback((event) => {
    event.preventDefault()
    console.log(registerValues)
  }, [registerValues])

  return <div className="flex h-screen justify-center items-center">
    <div className="background-image"></div>
    <div className="w-11/12 max-w-xl bg-gray-700 p-4" >
      <div>
        <div onClick={handleLoginHeight} className="flex items-center justify-center px-4 text-xl cursor-pointer h-12 bg-gray-600 border-b border-gray-400 text-whatsapp gap-2">
          <h6 className="font-bold">
            Login
          </h6>
          <HandClickIcon />
        </div>
        <AnimateHeight
          duration={500}
          height={loginHeight}
        >
          <form className={'p-4 grid grid-cols-1 gap-4'} onSubmit={handleLoginSubmit}>
            <div>
              <label className="text-white">Username</label>
              <Input value={loginValues.name} onChange={handleLoginValues} name="username" required />
            </div>
            <div>
              <label className="text-white">Password</label>
              <Input value={loginValues.password} onChange={handleLoginValues} name="password" type="password" required />
            </div>
            <div className="text-right">
              <button className="bg-whatsapp px-12 py-2 rounded-md text-white">Log In</button>
            </div>
          </form>
        </AnimateHeight>
      </div>
      <div>
        <div onClick={handleSignUpHeight} className="flex items-center justify-center px-4 text-xl cursor-pointer h-12 bg-gray-600 border-b border-gray-400 text-whatsapp gap-2">
          <h6 className="font-bold">Register</h6>
          <HandClickIcon />
        </div>
        <AnimateHeight
          duration={500}
          height={signUpHeight}
        >
          <form className={'p-4 grid grid-cols-1 gap-4'} onSubmit={handleRegisterSubmit}>
            <div>
              <label className="text-white">Username</label>
              <Input value={registerValues.username} onChange={handleRegisterValues} name="username" required />
            </div>
            <div>
              <label className="text-white">Password</label>
              <Input value={registerValues.password} onChange={handleRegisterValues} name="password" type="password" required />
            </div>
            <div>
              <label className="text-white">Repeat Password</label>
              <Input value={registerValues.repeat} onChange={handleRegisterValues} name="repeat" type="password" required />
            </div>
            <div className="text-right">
              <button className="bg-whatsapp px-12 py-2 rounded-md text-white">Sign Up</button>
            </div>
          </form>
        </AnimateHeight>
      </div>
    </div>
  </div>
}

export default Auth
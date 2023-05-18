import { useCallback, useState } from 'react'
import { Input } from '../components'
import AnimateHeight from 'react-animate-height'
import { HandClickIcon } from '../components/Icon'

function Auth() {
  const [ loginHeight, setLoginHeight ] = useState(0)
  const [ signUpHeight, setSignUpHeight ] = useState(0)

  const handleLoginHeight = useCallback(() => {
    setLoginHeight(oldValue => oldValue === 0 ? 'auto' : 0)
    setSignUpHeight(0)
  }, [setLoginHeight])

  const handleSignUpHeight = useCallback(() => {
    setSignUpHeight(oldValue => oldValue === 0 ? 'auto' : 0)
    setLoginHeight(0)
  }, [setLoginHeight])


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
          <form className={'p-4 grid grid-cols-1 gap-4'}>
            <div>
              <label className="text-white">Name</label>
              <Input />
            </div>
            <div>
              <label className="text-white">Password</label>
              <Input />
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
          <form className={'p-4 grid grid-cols-1 gap-4'}>
            <div>
              <label className="text-white">Name</label>
              <Input />
            </div>
            <div>
              <label className="text-white">Last Name</label>
              <Input />
            </div>
            <div>
              <label className="text-white">Password</label>
              <Input />
            </div>
            <div>
              <label className="text-white">Repeat Password</label>
              <Input />
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
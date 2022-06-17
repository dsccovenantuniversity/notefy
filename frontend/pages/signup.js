import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logo from '../public/images/logo.png'

export default function () {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="my-10 text-5xl font-bold">Sign up</h1>
          <div className="mb-6 rounded-md border border-solid bg-white px-20 py-1 hover:bg-gray-500">
            <a href="http://">Continue with Google</a>
          </div>
          <hr className="my-6 border-gray-500 opacity-60" />
          <div>
            <input
              type="text"
              className="mb-3 mr-8 w-36 p-1 "
              placeholder="First name"
            />
            <input
              type="text"
              className="mb-3 w-36 p-1 "
              placeholder="Last name"
            />
            <br />
            <input
              type="email"
              className="mb-3 w-80 p-1 "
              placeholder="Enter your email address..."
            />
            <br />
            <input
              type="password"
              className="mb-3 w-80 p-1"
              placeholder="Enter your password..."
            />
            <br />
            <button
              type="submit"
              className="mt-1 mb-3 w-80 rounded-md border border-solid bg-white py-1 hover:bg-gray-500"
            >
              Continue with email
            </button>
            <a href="" className="text-sm">
              <p>Forgot Password?</p>
            </a>
            <p>
              Have an account? <a href="">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

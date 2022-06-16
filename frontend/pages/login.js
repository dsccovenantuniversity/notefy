import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import logo from '../public/images/logo.png'

export default function () {
  return (
    <div className="container flex  justify-center">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-bold">Log in</h1>
        <div className="rounded-sm border border-solid bg-white px-20 py-0.5">
          <a href="http://">Continue with Google</a>
        </div>
        <div>
          <input type="text" placeholder="Enter your email address..." />
          <br />
          <input type="text" placeholder="Enter your password..." />
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

import logo from '../public/images/logo.png'

export default function () {
  return (
    <>
      <header>
        <nav className="mx-auto px-4 shadow-lg">
          <div className="flex flex-row items-center justify-between">
            <a href="/" className="h-16 w-screen py-2 px-4">
              <Image src={logo} alt="notefy logo" />
              <span className="text-2xl">Notefy</span>
            </a>
            <div className="space-x-4">
              <a
                href="/login"
                className="rounded-md bg-slate-400 px-4 py-3 text-white"
              >
                Login
              </a>
              <a href="/signup">Sign</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

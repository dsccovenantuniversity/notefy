import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Script from 'next/script'
import logo from '../public/images/logo.png'

import Sidebar from '../components/Sidebar'
import Sidebar2 from '../components/Sidebar2'
import Note from '../components/Note'

export default function () {
  return (
    <>
      <header className="fixed top-0 z-40 w-full">
        <nav className="absolute w-screen bg-slate-900">
          <button type="button" className="navbar-button p-3">
            <FontAwesomeIcon icon={faBars} className="text-white" />
          </button>
        </nav>
      </header>
      <Sidebar />
      <Sidebar2 />
      <main className="ml-14 mt-20 flex flex-1 justify-center">
        <div>
          <div>
            <h1 className="my-2 text-3xl font-bold">My notes</h1>
            <div className="rounded- bg-slate-900"></div>
          </div>
          <Note title="Hi" date={new Date().toDateString()} />
        </div>
      </main>
      <Script />
    </>
  )
}

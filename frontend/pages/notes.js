import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, fano } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import logo from '../public/images/logo.png'

import Sidebar from '../components/Sidebar'
import LargeSidebar from '../components/LargeSidebar'
import Note from '../components/Note'

const clickHandler = () => {
  // open
  const button = document.querySelectorAll('.navbar-button')
  const smMenu = document.querySelectorAll('.navbar-small')
  const lgMenu = document.querySelectorAll('.navbar-large')

  if (button.length && smMenu.length) {
    for (var i = 0; i < button.length; i++) {
      for (var j = 0; j < smMenu.length; j++) {
        console.log('hello')
        smMenu[j].classList.toggle('hidden')
        lgMenu[j].classList.toggle('hidden')
      }
    }
  }
}

export async function getStaticProps() {
  const res = await fetch('')

  return {
    props: {},
  }
}

export default function ({}) {
  return (
    <>
      <Head>
        <title>Welcome to Notefy</title>
      </Head>
      <header className="fixed top-0 z-40 w-full">
        <nav className="absolute w-screen bg-slate-900">
          <button
            type="button"
            onClick={clickHandler}
            className="navbar-button p-3"
          >
            <FontAwesomeIcon icon={faBars} className="text-white" />
          </button>
        </nav>
      </header>
      <Sidebar />
      <LargeSidebar />
      <main className="relative ml-14 mt-20 flex flex-1 justify-center text-center">
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

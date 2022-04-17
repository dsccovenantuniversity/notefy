import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Notefy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='container'>
          Welcome to Notefy
        </div>
      </main>
    </div>
  )
}

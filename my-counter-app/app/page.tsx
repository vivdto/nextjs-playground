'use client'

import { Bangers } from 'next/font/google'
import { useState } from "react"
import Head from 'next/head'

const sigmar = Bangers({ subsets: ['latin'], weight: '400' })

export default function Home() {
  const [numState, setNumState] = useState(0)

  const addToNumber = () => {
    setNumState(numState + 1)
  }

  const subToNumber = () => {
    setNumState(numState - 1)
  }

  const resetNumber = () => {
    setNumState(0)
  }

  return (
    <>
      {/* Add favicon link */}
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={`h-[100vh] w-[100vw] flex flex-col justify-center items-center ${sigmar.className} transform transition-all duration-500`}>
        <p className="text-[50px] font-bold">xGame Tracker</p>
        <p className="text-[80px] font-extrabold">{numState}</p>
        <div className="flex flex-row gap-10">
          <button onClick={addToNumber} className='px-6 py-3 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition font-semibold tracking-wider'>
            Level Up! :D
          </button>
          <button onClick={subToNumber} className='px-6 py-3 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition font-semibold tracking-wider'>
            Rank Down! :/
          </button>
          <button onClick={resetNumber} className='px-6 py-3 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 transition font-semibold tracking-wider'>
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

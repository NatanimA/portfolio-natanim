import Head from './head'
import {BsFillMoonStarsFill} from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head />
      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-10 flex justify-between'>
            <h1 className='text-xl'>Neo</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl mr-5' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-200 text-white px-4 py-2 rounded-lg ml-8' href='#'>Resume</a></li>
            </ul>
          </nav>
        </section>
      </main>
    </div>

  )
}

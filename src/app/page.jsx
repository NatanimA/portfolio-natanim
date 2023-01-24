"use client";
import Head from './head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import neo from '../../public/small.jpg'
import design from '../../public/design.png'
import code from '../../public/code.png'
import consulting from '../../public/consulting.png'
import web1 from '../../public/web1.png'
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import web5 from '../../public/web5.png'
import web6 from '../../public/web6.png'
import { useState } from 'react'

export default function Home() {
  const [darkMode,setDarkMode] = useState(false)
  return (
    <div className={ darkMode ? "dark" : "" }>
      <Head />
      <main className='bg-white px-10 md:px-20 dark:bg-gray-800'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-10 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>Neo</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl mr-5' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-200 text-white px-4 py-2 rounded-lg ml-8' href='#'>Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Natanim Abesha</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Full-Stack Developer</h3>
            <p className='text-medium py-5 leading-8 text-gray-800 md:text-xl md:w-8/12 md:m-auto'>
              Full-stack Developer providing services for programming need.
              Join me down below and let's create something great.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white'>
            <AiFillTwitterCircle className='animate-bounce' />
            <AiFillLinkedin className='animate-bounce' />
            <AiFillGithub className='animate-bounce' />
          </div>
          <div className='md:mt-4'>
            <Image className='m-auto max-w-full h-auto rounded-full flex' src={neo} alt="Profile picture"/>
          </div>
        </section>
        <section className='md:mt-20'>
          <div className='mx-auto text-center mt-4 w-8/12'>
            <h3 className='text-3xl dark:text-white'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freelance and remote Developer
              I have given services for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>startups </span>
              and collaborated with talented people to create digital product for both
              <strong className='text-teal-500'> businesses</strong> and <strong className='text-teal-500'>consumers</strong>.
            </p>
          </div>
          <div>
            <div className='md:flex max-w-full justify-between mb-14'>
              <div className='md:mt-5 p-6 shadow-lg dark:bg-gray-300 dark:rounded-lg'>
                <Image className='w-8/12 md:m-auto' src={design} alt="Designing Image"/>
                <div className='md:mt-5 md:w-6/12 md:ml-0'>
                  <strong className='text-teal-500 text-3xl font-burtons m-auto'>Design</strong>
                  <p className='py-2'>Creating elegant Designs suited for your needs following design theory.
                  </p>
                  <h4 className='py-4 text-teal-500'>Design tools I use</h4>
                  <p className='text-gray-500 py-1'>Figma</p>
                  <p className='text-gray-500 py-1'>Illustrator</p>
                  <p className='text-gray-500 py-1'>Photoshop</p>
                </div>
              </div>
              <div className='md:m-8 md:mt-5 p-6 shadow-lg max-h-screen dark:bg-gray-300 dark:rounded-lg'>
                <Image className='md:m-auto' src={consulting} alt="Consulting Image"/>
                <div className='md:mt-5 md:w-6/12 md:ml-0'>
                  <strong className='text-teal-500 text-3xl font-burtons'>Consulting</strong>
                  <p className='py-2'>Creating elegant Designs suited for your needs following design theory.
                  </p>
                  <h4 className='py-4 text-teal-500'>Design tools I use</h4>
                  <p className='text-gray-500 py-1'>Figma</p>
                  <p className='text-gray-500 py-1'>Illustrator</p>
                  <p className='text-gray-500 py-1'>Photoshop</p>
                </div>
              </div>
              <div className='md:my-5 p-6 shadow-lg dark:bg-gray-300 dark:rounded-lg'>
                <Image className='md:m-auto md:w-9/12' src={code} alt="Programming Image" />
                <div className='md:mt-5 md:w-6/12 md:ml-0'>
                  <strong className='text-teal-500 text-3xl m-auto font-burtons'>Programming</strong>
                  <p className='py-2'>Creating elegant Designs suited for your needs following design theory.
                  </p>
                  <h4 className='py-4 text-teal-500'>Design tools I use</h4>
                  <p className='text-gray-500 py-1'>Figma</p>
                  <p className='text-gray-500 py-1'>Illustrator</p>
                  <p className='text-gray-500 py-1'>Photoshop</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='p-10'>
            <h3 className='text-3xl py-1 text-teal-500'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freelance and remote Developer
              I have given services for
              <span className='text-teal-500'> agencies </span>
              consulted for <span className='text-teal-500'>startups </span>
              and collaborated with talented people to create digital product for both
              <strong className='text-teal-500'> businesses</strong> and <strong className='text-teal-500'>consumers</strong>.
            </p>
          </div>
          <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout={"responsive"} src={web1} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout={"responsive"} src={web2} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout={"responsive"} src={web3} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout={"responsive"} src={web4} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout={"responsive"} src={web5} />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image className='rounded-lg object-cover' width={"100%"} height={"100%"} layout={"responsive"} src={web6} />
            </div>
          </div>
        </section>
      </main>
    </div>

  )
}

import Link from "next/link"
import { Menu, Transition } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineInstagram,  } from 'react-icons/ai'
import Image from "next/image"
import { Fragment } from "react"
import { motion } from "framer-motion"


export default function Navbar() {
  return (
    <nav className="bg-principal items-center justify-center w-full  shadow-lg flex flex-col-reverse fixed top-0  z-20 lg:h-14 2xl:h-20   lg:flex-row ">

    <div className="flex flex-row lg:block  sm:mt-0 justify-center items-center ">
    <div className="lg:hidden ">
    <Menu>
    <Menu.Button><AiOutlineMenu className="text-white text-4xl " /></Menu.Button>
    <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
    <Menu.Items>
    <div className="-ml-10 fixed bg-secondary flex justify-center items-center mt-12 p-5 rounded-2xl">
      
      <div className="  flex flex-col bg-yellow-600   bg-opacity-40 rounded-2xl  h-96  justify-center items-start  list-none  z-10">
      <Menu.Item>
      {({ active }) => (
          <Link href="/" ><li className=" ml-4 w-60 md:w-96  border-b-4   cursor-pointer mt-28  hover:translate-x-1 "><a className=" font-medium text-white text-2xl" >Inicio</a></li></Link>
        )}
      </Menu.Item>
      <Menu.Item>
      {({ active }) => (
          <Link href="/acerca-de" ><li className="w-60 md:w-96 mb-10 ml-4 border-b-4 mt-10   cursor-pointer   hover:translate-x-1 "><a className=" font-medium text-white text-2xl" >Acerca De</a></li></Link>
        )}
      </Menu.Item>
      <Menu.Item>
      {({ active }) => (
          <Link href="/precios" ><li className=" w-60  border-b-4 ml-4   cursor-pointer md:w-96   hover:translate-x-1 "><a className=" font-medium text-white text-2xl" >Precios</a></li></Link>
        )}
      </Menu.Item>
      <Menu.Item>
      {({ active }) => (
          <Link href="/contacto" ><li className=" w-60  ml-4 border-b-4 mr-4  mt-10 mb-32 cursor-pointer  hover:translate-x-1 md:w-96 "><a className=" font-medium text-white text-2xl" >Contacto</a></li></Link>
        )}
      </Menu.Item>
      </div>
    </div>
    </Menu.Items>
    </Transition>
      
    </Menu>
    </div>
    <motion.div 
      initial={{y:-300}}
      animate={{y:0}}
      transition={{duration: 0.5}}
      className="  ml-3 md:ml-10 lg:ml-20 flex mt-3 mb-3 lg:mb-0  lg:mr-0">
          <div className="rounded-full bg-logo-black flex   z-20"><Image className="rounded-full" src="/img/logo.png" width={60} height={60} alt="logo dragones" layout="intrinsic" /></div>
          <h2 className=" font-mediun ml-3 sm:ml-10 mt-5 sm:mt-3 text-white ">(+57) 321 5400876</h2>
        </motion.div>
    </div>


      
      <motion.ul 
      initial={{y:-300}}
      animate={{y:0}}
      transition={{duration: 0.5}}
      className="text-logo-white hidden flex-row flex-grow justify-center items-center text-center h-14 lg:flex  bg-principal">
        
        <Link href="/" ><li className="cursor-pointer hover:text-secondary border-secondary lg:mr-10" ><a className=" font-medium text-lg " >Inicio</a></li></Link>
        <Link href="/acerca-de" ><li className="cursor-pointer hover:text-secondary  border-secondary mr-10" ><a className=" font-mediun text-lg" >Acerca de</a></li></Link>
        <Link href="/precios" ><li className="cursor-pointer hover:text-secondary  border-secondary mr-10" ><a className=" font-mediun text-lg" >Precios</a></li></Link>
        <Link href="/contacto" ><li className="cursor-pointer hover:text-secondary  border-secondary mr-10" ><a className=" font-mediun text-lg" >Contacto</a></li></Link>
      </motion.ul>

      <div className=" flex bg-white w-full justify-center items-center  lg:mr-10 lg:ml-16 lg:bg-principal lg:w-min ">
          <a href="https://www.instagram.com/caliclubdragones/?hl=es" target="_blank" rel="noopener noreferrer" className="mr-2 rounded-full bg-logo-white p-1 hover:translate-x-1 hover:translate-y-1 lg:md:ml-20">
          <AiOutlineInstagram className=" text-principal text-lg " />
          </a>
          <a href="https://www.facebook.com/Club.Dragones.baloncesto.Cali" target="_blank" rel="noopener noreferrer" className="  fill-principal rounded-full bg-logo-white p-1 my-2  hover:translate-x-1 hover:translate-y-1">
          <svg xmlns="http://www.w3.org/2000/svg" color="#AD1D02" width={20} height={20} viewBox="0 0 24 24">
         <g id="Facebook" >
        <path d="M19.02,4.975A9.93,9.93,0,0,0,2.07,12,9.935,9.935,0,0,0,12,21.935a9.98,9.98,0,0,0,3.8-.75,10.189,10.189,0,0,0,3.22-2.16,9.934,9.934,0,0,0,0-14.05Zm-.7,13.34A8.921,8.921,0,0,1,13,20.885v-6.56h1.88a1,1,0,0,0,0-2H13V9.585a1,1,0,0,1,1-1h1.2a1,1,0,0,0,0-2H13.5a2.5,2.5,0,0,0-2.5,2.5v3.24H9.13a1,1,0,1,0,0,2H11v6.56a8.919,8.919,0,1,1,9.26-5.47A9.061,9.061,0,0,1,18.32,18.315Z"/>
        </g>
        </svg>
          </a>

        </div>

      
    </nav>
  )
}

import { useState } from 'react'
import { MenuAlt2Icon } from '@heroicons/react/outline'
import NavBar from './NavBar'
import Header from './Header'
import CentralContainer from './CentralContainer'
import SideContainer from './SideContainer'

export default function Main () {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='h-screen flex overflow-hidden bg-gray-100'>

      <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <div className='relative z-10 flex-shrink-0 flex h-16 bg-white shadow'>
          <button
            className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
            onClick={() => setSidebarOpen(true)}
          >
            <span className='sr-only'>Open sidebar</span>
            <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
          </button>
          <Header />
        </div>
        <div className='flex-1 relative z-0 flex overflow-hidden'>
          <CentralContainer />
          <SideContainer />
        </div>
      </div>
    </div>
  )
}

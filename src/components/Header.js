import { Fragment } from 'react'

const Header = () => {
  return (
    <>
      <div className='flex-1 px-4 flex justify-between'>
        <div className='flex-1 flex'>
          Control Panel
        </div>
        <div className='ml-4 flex items-center md:ml-6'>
          <button className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
            <span className='sr-only'>View notifications</span>
            Toggle
          </button>
        </div>
      </div>
    </>
  )
}

export default Header

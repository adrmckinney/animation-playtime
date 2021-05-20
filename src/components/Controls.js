import { Fragment } from 'react'

const Controls = ({ handleToggleBtn }) => {
  return (
    <>
      <div className='flex-1 px-4 flex justify-between'>
        <div className='flex-1 flex'>
          Control Panel
        </div>
        <div className='ml-4 flex items-center md:ml-6'>
          <button
            data-testid='is-animating-btn'
            className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            onClick={() => handleToggleBtn()}
          >
            Trigger Animation
          </button>
        </div>
      </div>
    </>
  )
}

export default Controls

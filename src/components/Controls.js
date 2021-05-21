import { Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import ToggleList from './controlBtns/ToggleList'

const Controls = ({ setControlPanelState }) => {
  const path = useLocation()

  const setBtnFunctions = () => {
    if (path.pathname === '/fade') {
      setControlPanelState('is-animating-btn')
    } else if (path.pathname === '/fade-reset') {
      setControlPanelState('animating-set-timeout')
    }
  }
  return (
    <>
      <div className='px-4 flex flex-col space-y-6 w-full h-full items-center text-2xl font-serif text-indigo-500 font-bold'>
        <div className='flex'>
          Control Panel
        </div>
        <span className='flex justify-evenly w-full'>
          <span>
            <ToggleList setControlPanelState={setControlPanelState} />
          </span>
          <div className='ml-4 flex items-center md:ml-6'>
            <button
              data-testid='is-animating-btn'
              className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              onClick={() => setBtnFunctions()}
            >
              Trigger Animation
            </button>
          </div>
        </span>
      </div>
    </>
  )
}

export default Controls

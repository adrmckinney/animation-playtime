import { Transition } from '@headlessui/react'
import { useState } from 'react'

const FadeTailwind = () => {
  const [isShowing, setIsShowing] = useState(false)
  console.log('isShowing', isShowing)
  return (
    <>
      <span className='flex flex-col justify-evenly h-1/2 w-1/2 border-2 border-black'>
        <button
          className='bg-green-500 w-1/4 self-center'
          onClick={() => setIsShowing(!isShowing)}
        >Toggle Fade
        </button>
        <Transition
          show={isShowing}
          enter='transition-opacity duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='flex justify-center'
        >
          <div className='bg-blue-500 w-1/2 min-h-full'>
            <div className='py-2 px-3'>This card should fade in and fade out on btn click</div>
            <span>
              <div>Child element inside card</div>
            </span>
          </div>
        </Transition>
      </span>
    </>
  )
}

export default FadeTailwind

import { Transition } from '@headlessui/react'
import ImageCards from '../ImageCards'

const Fade = ({ isAnimatingBtn }) => {
  return (
    <>
      <span className='h-1/2 w-1/2 border-2 border-black flex justify-center items-center'>
        <Transition
          show={isAnimatingBtn}
          enter='transition-opacity duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='flex justify-center'
        >
          <ImageCards />
          {/* <div
            data-testid='card'
            className='bg-blue-500 w-1/2 min-h-full'
          >
            <div className='py-2 px-3'>This card should fade in and fade out on btn click</div>
            <span>
              <div>Child element inside card</div>
            </span>
          </div> */}
        </Transition>
      </span>
    </>
  )
}

export default Fade

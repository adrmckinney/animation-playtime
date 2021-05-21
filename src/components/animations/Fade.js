import { Transition } from '@headlessui/react'
import ImageCards from '../cards/ImageCards'
import InfoCards from '../cards/InfoCards'

const Fade = ({ isAnimatingBtn, currentListItem, listType }) => {
  return (
    <>
      <span className='h-1/2 w-1/2 flex justify-center items-center'>
        <Transition
          appear
          show={isAnimatingBtn}
          enter='transition-opacity duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='flex justify-center w-full h-full'
          data-testid='card'
        >
          {listType === 'images' &&
            <ImageCards currentListItem={currentListItem} />}
          {listType === 'info' &&
            <InfoCards currentListItem={currentListItem} />}
        </Transition>
      </span>
    </>
  )
}

export default Fade

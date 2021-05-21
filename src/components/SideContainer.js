const DESCRIPTIONS = [
  {
    title: '',
    body: ''
  },
  {
    title: 'Fade',
    body: 'A simple fade animation on a single card. On clicking the animation button above, the card will fade out. On the next click, the card will fade back in.'
  },
  {
    title: 'Fade with Timed Reset',
    body: 'This animation is set to reset after a certain amount of time. On clicking the animation button above, the card will fade out and after a set duration the card will fade back in.'
  },
  {
    title: 'Fade Carousel',
    body: 'This animation contains multiple cards that will fade into view one at a time on button click.'
  }
]

const SideContainer = ({ currentDescriptionIdx }) => {
  return (
    <>
      <aside className='hidden relative lg:flex lg:flex-col flex-shrink-0 w-96 border-l border-gray-200'>
        {/* Start secondary column (hidden on smaller screens) */}
        <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
          <div className='h-full border-2 rounded-lg flex flex-col items-center p-4 space-y-10'>
            <span className='font-serif text-indigo-500 text-2xl font-bold'>
              {DESCRIPTIONS[currentDescriptionIdx].title}
            </span>
            <span className='text-gray-800 text-lg font-serif'>
              {DESCRIPTIONS[currentDescriptionIdx].body}
            </span>
          </div>
        </div>
        {/* End secondary column */}
      </aside>
    </>
  )
}

export default SideContainer

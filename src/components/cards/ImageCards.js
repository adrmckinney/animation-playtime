
const FILES = [
  {
    title: '',
    size: '',
    source:
        'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80'
  },
  {
    title: '',
    size: '',
    source:
    'https://images.unsplash.com/photo-1484278786775-527ac0d0b608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDQxMDR8MHwxfHNlYXJjaHwxOXx8c25vd3xlbnwwfDB8fHwxNjIxNTQzOTE2&ixlib=rb-1.2.1&q=80&w=400'
  },
  {
    title: '',
    size: '',
    source:
    'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDQxMDR8MHwxfHNlYXJjaHwyOXx8YmVhY2h8ZW58MHwwfHx8MTYyMTU0NDAzOA&ixlib=rb-1.2.1&q=80&w=400'
  }

]

export default function ImageCards ({ currentListItem }) {
  return (
    <ul className='w-full'>
      <li className='relative'>
        <div className='group block aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden'>
          <img src={FILES[currentListItem.idx].source} alt={FILES[currentListItem.idx].title} className='object-cover pointer-events-none group-hover:opacity-75' />
          <button type='button' className='absolute inset-0 focus:outline-none'>
            <span className='sr-only'>View details for {FILES[currentListItem.idx].title}</span>
          </button>
        </div>
        <p className='mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none'>{FILES[currentListItem.idx].title}</p>
        <p className='block text-sm font-medium text-gray-500 pointer-events-none'>{FILES[currentListItem.idx].size}</p>
      </li>
    </ul>
  )
}

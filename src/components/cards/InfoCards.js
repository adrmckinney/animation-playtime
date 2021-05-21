/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon } from '@heroicons/react/solid'

const PEOPLE = [
  {
    name: 'Jane Cooper',
    title: 'Paradigm Representative',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    name: 'Cody Fisher',
    title: 'Lead Security Associate',
    role: 'Admin',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
    'https://images.unsplash.com/photo-1560856218-0da41ac7c66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDQxMDR8MHwxfHNlYXJjaHwyfHxmYWNlc3xlbnwwfDB8fHwxNjIxNTQxMzI5&ixlib=rb-1.2.1&q=80&w=400'
  }
]

export default function InfoCards ({ currentListItem }) {
  return (
    <ul className='w-full'>
      <li
        className='col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200'
      >
        <div className='flex-1 flex flex-col p-8'>
          <img className='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full' src={PEOPLE[currentListItem.idx].imageUrl} alt='' />
          <h3 className='mt-6 text-gray-900 text-sm font-medium'>{PEOPLE[currentListItem.idx].name}</h3>
          <dl className='mt-1 flex-grow flex flex-col justify-between'>
            <dt className='sr-only'>Title</dt>
            <dd className='text-gray-500 text-sm'>{PEOPLE[currentListItem.idx].title}</dd>
            <dt className='sr-only'>Role</dt>
            <dd className='mt-3'>
              <span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                {PEOPLE[currentListItem.idx].role}
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <div className='-mt-px flex divide-x divide-gray-200'>
            <div className='w-0 flex-1 flex'>
              <a
                href={`mailto:${PEOPLE[currentListItem.idx].email}`}
                className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
              >
                <MailIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
                <span className='ml-3'>Email</span>
              </a>
            </div>
            <div className='-ml-px w-0 flex-1 flex'>
              <a
                href={`tel:${PEOPLE[currentListItem.idx].telephone}`}
                className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
              >
                <PhoneIcon className='w-5 h-5 text-gray-400' aria-hidden='true' />
                <span className='ml-3'>Call</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  )
}

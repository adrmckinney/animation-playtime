import { render } from '@testing-library/react'
import InfoCards from '../cards/InfoCards'

describe('<InfoCards />', () => {
  const currentListItem = { appear: true, idx: 0 }

  test('renders without crashing', () => {
    render(<InfoCards currentListItem={currentListItem} />)
  })
})

import { render } from '@testing-library/react'
import ImageCards from '../cards/ImageCards'

describe('<ImageCards />', () => {
  const currentListItem = { appear: true, idx: 0 }

  test('renders without crashing', () => {
    render(<ImageCards currentListItem={currentListItem} />)
  })
})

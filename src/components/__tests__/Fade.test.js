import { render } from '@testing-library/react'
import Fade from '../animations/Fade'

describe('<Fade />', () => {
  test('renders without crashing', () => {
    render(<Fade isAnimatingBtn />)
  })

  test('card is visible when true', () => {
    const { getByTestId } = render(<Fade isAnimatingBtn />)
    const card = getByTestId('card')

    expect(card).toBeInTheDocument()
  }
  )
  test('card disappears when false', () => {
    const { queryByTestId } = render(<Fade isAnimatingBtn={false} />)
    const card = queryByTestId('card')

    expect(card).toBeNull()
  })
})

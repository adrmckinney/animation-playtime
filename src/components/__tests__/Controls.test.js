import { fireEvent, render } from '@testing-library/react'
import Controls from '../Controls'

describe('<Controls />', () => {
  test('is animating btn is clicked', () => {
    const click = jest.fn()
    const { getByTestId } = render(<Controls handleToggleBtn={click} />)
    const animatingBtn = getByTestId('is-animating-btn')

    fireEvent.click(animatingBtn)
    expect(click).toBeCalled()
  })
})

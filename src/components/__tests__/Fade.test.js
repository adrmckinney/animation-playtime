import { render, waitForElementToBeRemoved, screen, fireEvent } from '@testing-library/react'
import Fade from '../animations/Fade'

describe('<Fade />', () => {
  const currentListItem = { appear: true, idx: 0 }

  test('renders without crashing', () => {
    render(<Fade isAnimatingBtn currentListItem={currentListItem} />)
  })

  test('card is visible when true', () => {
    const { getByTestId } = render(<Fade isAnimatingBtn currentListItem={currentListItem} />)
    const card = getByTestId('card')

    expect(card).toBeInTheDocument()
  }
  )
  test('card not visible when false', () => {
    const { queryByTestId } = render(<Fade isAnimatingBtn={false} currentListItem={currentListItem} />)
    const card = queryByTestId('card')

    expect(card).toBeNull()
  })

  // test('card disappears when btn clicked', async () => {
  //   render(<Main />)
  //   const animateBtn = screen.getByText('Trigger Animation')
  //   fireEvent.click(animateBtn)
  // const { queryByTestId } = render(<Fade isAnimatingBtn={isAnimatingBtn} currentListItem={currentListItem} />)
  // isAnimatingBtn = false

  // await waitForElementToBeRemoved(() => queryByTestId('card'))
  // })
})

import { fireEvent, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Controls from '../Controls'

describe('<Controls />', () => {
  const history = createMemoryHistory()
  const route = '/some-route'
  history.push(route)

  test('is animating btn is clicked', () => {
    const click = jest.fn()
    const { getByTestId } = render(
      <Router history={history}>
        <Controls setControlPanelState={click} />
      </Router>)
    const animatingBtn = getByTestId('is-animating-btn')

    fireEvent.click(animatingBtn)
    expect(click).toBeCalled()
  })
})

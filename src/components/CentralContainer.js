import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FadeTailwind from './FadeTailwind'

const CentralContainer = () => {
  return (
    <>
      <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
        {/* Start main area */}
        <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
          <div className='h-full border-2 rounded-lg flex justify-center items-center'>
            <Router>
              <Switch>
                <Route path='/fade'>
                  <FadeTailwind />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
        {/* End main area */}
      </main>
    </>
  )
}

export default CentralContainer

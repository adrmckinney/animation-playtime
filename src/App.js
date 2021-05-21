import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MenuAlt2Icon } from '@heroicons/react/outline'
import { useTimeoutFn } from 'react-use'
import NavBar from './components/NavBar'
import Controls from './components/Controls'
import Fade from './components/animations/Fade'
import FadeReset from './components/animations/FadeReset'
import Home from './components/Home'
import SideContainer from './components/SideContainer'
// import Main from './components/Main'

function App () {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isAnimatingBtn, setIsAnimatingBtn] = useState(true)
  const [listType, setListType] = useState('images')
  const [, , resetIsShowing] = useTimeoutFn(() => setIsAnimatingBtn(true), 500)
  const [currentDescriptionIdx, setCurrentDescriptionIdx] = useState(0)
  const [currentListItem, setCurrentListItem] = useState({
    appear: true,
    idx: 0
  })

  const setControlPanelState = (stateId) => {
    if (stateId === 'is-animating-btn') {
      setIsAnimatingBtn(!isAnimatingBtn)
    } else if (stateId === 'images') {
      setListType('images')
    } else if (stateId === 'info') {
      setListType('info')
    } else if (stateId === 'animating-set-timeout') {
      setIsAnimatingBtn(!isAnimatingBtn)
      resetIsShowing()
    }
  }

  const matchNavBtnIdxToDescIdx = (newIdxValue) => {
    setCurrentDescriptionIdx(newIdxValue)
  }
  console.log('currentDescriptionIdx', currentDescriptionIdx)
  return (
    <>
      <Router>
        <div className='h-screen flex overflow-hidden bg-gray-100'>
          <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} matchNavBtnIdxToDescIdx={matchNavBtnIdxToDescIdx} />
          <div className='flex flex-col w-0 flex-1 overflow-hidden'>
            <div className='relative z-10 flex-shrink-0 flex h-32 bg-white shadow'>
              <button
                className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
                onClick={() => setSidebarOpen(true)}
              >
                <span className='sr-only'>Open sidebar</span>
                <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
              </button>
              <Controls setControlPanelState={setControlPanelState} />
            </div>
            <div className='flex-1 relative z-0 flex overflow-hidden'>
              <main className='flex-1 relative z-0 overflow-y-auto focus:outline-none'>
                {/* Start main area */}
                <div className='absolute inset-0 py-6 px-4 sm:px-6 lg:px-8'>
                  <div className='h-full border-2 rounded-lg flex justify-center items-center'>

                    <Switch>
                      <Route path='/fade'>
                        <Fade isAnimatingBtn={isAnimatingBtn} currentListItem={currentListItem} listType={listType} />
                      </Route>
                      <Route path='/fade-reset'>
                        <FadeReset isAnimatingBtn={isAnimatingBtn} currentListItem={currentListItem} listType={listType} />
                      </Route>
                      <Route path='/'>
                        <Home />
                      </Route>
                    </Switch>
                  </div>
                </div>
                {/* End main area */}
              </main>
              <SideContainer currentDescriptionIdx={currentDescriptionIdx} />
            </div>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App

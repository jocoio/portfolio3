
import './index.css'
import React from 'react'
import App from './components/app/App'
import { render } from 'react-dom'
import {
  BrowserRouter,
  Route
} from 'react-router-dom'
import routes from './components/utils/routes'
import ScrollToTop from './components/utils/ScrollToTop'

document.title = 'Jon Corbett Portfolio'

render(
  <BrowserRouter>
    <ScrollToTop>
      <Route>
        {props => <App {...props} routes={routes} />}
      </Route>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
)
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Section from './component/Section/Section'
import AppBar from './component/AppBar/AppBar'
import HomeViews from './views/Homeviews'
import Authors from './views/Authors'
import Books from './views/Books'
import TableView from './views/Sorted'

// const HomeViews = lazy(() =>
//   import('./views/Homeviews' /* webpackChunkName: "home-page" */),
// )
function App() {
  return (
    <>
      <Section>
        <AppBar />
      </Section>
      <Section>
        <Switch>
          <Route exact path="/">
            <HomeViews />
          </Route>

          <Route exact path="/authors">
            <Authors />
          </Route>

          <Route exact path="/books">
            <Books />
          </Route>
          <Route exact path="/sorted">
            <TableView />
          </Route>
        </Switch>
      </Section>
    </>
  )
}

export default App

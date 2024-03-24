import {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import MeetContext from './context/MeetContext'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    name: 'Welcome to Meetup',
    topics: 'Please register for the topic',
    isColorChnage: false,
    isError: false,
  }

  onRegister = (name, topics) => {
    if (name === '') {
      this.setState({isError: true})
    } else {
      this.setState({
        name: `Home ${name}`,
        topics: `Welcome to ${topics}`,
        isColorChnage: true,
      })
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {name, topics, isColorChnage, isError} = this.state
    return (
      <MeetContext.Provider
        value={{
          onRegister: this.onRegister,
          name,
          topics,
          isColorChnage,
          isError,
        }}
      >
        <>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </>
      </MeetContext.Provider>
    )
  }
}

export default withRouter(App)

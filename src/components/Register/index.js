import {Component} from 'react'
import Navbar from '../Navbar'
import MeetContext from '../../context/MeetContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

import {
  RegisterMainContainer,
  RegisterContainer,
  RegisterImage,
  FormContainer,
  FormHeading,
  NameInputSearch,
  NameInputLabel,
  SelectInputSearch,
  RegisterError,
  RegisterNowButton,
} from './styledComponents'

class Register extends Component {
  state = {name: '', topics: topicsList[0].displayText}

  onNameInput = event => {
    this.setState({name: event.target.value})
  }

  onTopicsInput = event => {
    this.setState({topics: event.target.value})
  }

  render() {
    const {name, topics} = this.state
    return (
      <MeetContext.Consumer>
        {value => {
          const {onRegister, isError} = value

          const OnClickRegister = event => {
            event.preventDefault()
            onRegister(name, topics)
          }

          return (
            <>
              <Navbar />
              <RegisterMainContainer>
                <RegisterContainer>
                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <FormContainer>
                    <FormHeading> Let us join </FormHeading>
                    <form onSubmit={OnClickRegister}>
                      <div>
                        <NameInputLabel> Name </NameInputLabel> <br />
                        <NameInputSearch
                          type="text"
                          placeholder="Your Name"
                          onChange={this.onNameInput}
                          value={name}
                        />
                      </div>
                      <div>
                        <NameInputLabel> Topics </NameInputLabel> <br />
                        <SelectInputSearch
                          onChange={this.onTopicsInput}
                          value={topics}
                        >
                          {topicsList.map(each => (
                            <option key={each.id}>{each.displayText}</option>
                          ))}
                        </SelectInputSearch>
                      </div>
                      <RegisterNowButton type="submit">
                        Register Now
                      </RegisterNowButton>
                      {isError && (
                        <RegisterError> Please Enter your name </RegisterError>
                      )}
                    </form>
                  </FormContainer>
                </RegisterContainer>
              </RegisterMainContainer>
            </>
          )
        }}
      </MeetContext.Consumer>
    )
  }
}

export default Register

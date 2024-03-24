import {
  HomeMianContainer,
  HomeContainer,
  HomeHeading,
  HomePara,
  HomeRegisterButton,
  HomeMeetupImage,
} from './styledComponents'
import Navbar from '../Navbar'
import MeetContext from '../../context/MeetContext'

const Home = props => (
  <MeetContext.Consumer>
    {value => {
      const {name, topics, isColorChnage} = value

      const onRegisterButton = () => {
        const {history} = props
        history.replace('/register')
      }

      return (
        <>
          <Navbar />
          <HomeMianContainer>
            <HomeContainer>
              <HomeHeading color={isColorChnage}> {name} </HomeHeading>
              <HomePara color={isColorChnage}> {topics} </HomePara>
              <HomeRegisterButton onClick={onRegisterButton}>
                Register
              </HomeRegisterButton>
              <HomeMeetupImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          </HomeMianContainer>
        </>
      )
    }}
  </MeetContext.Consumer>
)

export default Home

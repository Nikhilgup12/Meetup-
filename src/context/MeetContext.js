import React from 'react'

const MeetContext = React.createContext({
  name: 'Welcome to Meetup',
  topics: 'Please register for the topic',
  onRegister: () => {},
  isColorChnage: false,
  isError: false,
})

export default MeetContext

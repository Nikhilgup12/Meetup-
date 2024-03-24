import styled from 'styled-components'

export const HomeMianContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
height:100vh;
`
export const HomeContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

`
export const HomeMeetupImage = styled.img`
width:100%;
max-width:500px;
margin-top:30px;
`
export const HomeHeading = styled.h1`
margin-bottom:0px;
font-size:40px;
color:${props => (props.color ? '#2563eb' : '#334155')};
font-family:Roboto;
`

export const HomePara = styled.p`
color:${props => (props.color ? '#475569' : '#64748b')};
font-size:20px;
font-family:Roboto;
font-weight:${props => (props.color ? 'bold' : 'none')}
`
export const HomeRegisterButton = styled.button`
background-color:#3b82f6;
padding:10px 10px 10px 10px;
border-width:0px;
border-radius:5px;
color:#ffffff;
`

import styled from 'styled-components'

export const RegisterMainContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
`

export const RegisterContainer = styled.div`
display:flex;
padding:20px;
width:100%;
max-width:700px;
`
export const RegisterImage = styled.img`
width:100%;
max-width:400px;
`
export const FormContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
padding:20px;
`
export const FormHeading = styled.h1`
color:#475569;
font-size:40px;
font-family:Roboto;
`
export const NameInputLabel = styled.label`
color:#64748b;
font-size:15px;
font-family:Roboto;
`
export const NameInputSearch = styled.input`
width:100%;
padding:7px 10px 7px 10px; 
border-radius:5px;
border:1px solid #cbd5e1;
outline:none;
margin-top:8px;
margin-bottom:5px;
`
export const SelectInputSearch = styled.select`
width:100%;
padding:7px 10px 7px 10px; 
border-radius:5px;
border:1px solid #cbd5e1;
outline:none;
margin-top:8px;
margin-bottom:5px;
`
export const RegisterNowButton = styled.button`
background-color: #3b82f6;
color:#ffffff;
padding:7px 10px 7px 10px; 
border-radius:5px;
border:1px solid #cbd5e1;
outline:none;
margin-top:20px;
margin-bottom:5px;
font-family:Roboto;
`
export const RegisterError = styled.p`
color:#ff0b37;
margin-top:0px;
font-size:10px;
`

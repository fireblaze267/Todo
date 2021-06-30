import styled from 'styled-components';

export const container = styled.div `
 width : 250px;
 height : 180px;
 box-shadow: 3px 3px 15px 0px rgba(0,0,0,0.75);
border-radius:10px; 
display:flex; 
align-items:center ; 
justify-content:center;
flex-direction:column;
margin:20px;
cursor: pointer;
transition: all 0.3s ease;
opacity: ${props => props.done ? 0.5 : 1} ;
&:hover{
    opacity: 0.7 ; 
}
 
`
export const Topcard = styled.div`
display:flex; 
align-items:center ; 
justify-content:center;
flex-direction:column;
`

export const Bottomcard = styled.div`
width:100%;
display :flex ; 
justify-content:space-around;
strong{
    font-weight:bold;
    color:#EE6B26;
}
span{
    color: #707070;
}
`
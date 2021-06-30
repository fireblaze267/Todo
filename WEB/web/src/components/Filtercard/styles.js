import styled from 'styled-components';

export const container = styled.div `
 width : 260px;
 height : 60px;
 padding: 10px;
 background : ${props => props.actived ? '#EE6B26' : '#20295F'};
 display:flex;
 border-radius: 5px;
 flex-direction: column ;
 justify-content : space-around ;
 cursor: pointer;
 transition : all ease 0.3s;
 
 img{
     width:25px;
     height:25px ;
    
 }
 span{
      color : white;
      font-weight: bold;
      align-self : flex-end;
      font-size : 18px;
 }

 &:hover{
    background : #EE6B26;
 }

` 


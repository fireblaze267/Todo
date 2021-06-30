import styled from 'styled-components';

export const container = styled.div `
 width : 100%;
 height : 70px;
 background : #20295F;
 display:flex;
 border-bottom : 5px #EE6B26 solid;
 
`
export const Leftside = styled.div `
width : 50%;
height : 70px;
display: flex;
align-items: center;
padding-left: 10px ;
img{ 
    width : 100px;
    height: 40px;
}

`
export const Rightside = styled.div `
width : 50%;
height : 70px;
display: flex ; 
align-items: center;
justify-content : flex-end; 

button{
   background:none;
   outline:0px;
   border: none;
   cursor: pointer;
}
a,button {
   color : white ;
   font-weight : bold ; 
   text-decoration : none ; 
   margin : 0 10px; 
   
   
   &:hover { 
      color: #EE6B26;

   }
 
}
#notification{
   img{width:25px;
      height:30px;
   }
   span {
      background : ${props => props.latecount ? 'none' : 'White'};
      color : #EE6B26; 
      padding : 3px 7px ;
      border-radius: 50%;
      position: relative;
      top : -20px;
      right : 10px;
   }
   &:hover{
      opacity : 0.5; 

   }
}
.dividir::after{
      content : "|";
      margin : 0 10px;
      color: white;
   }
button{
   font-size:16px;
   
}

`
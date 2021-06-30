import React , {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';
import typeicons from '../../Utils/Typeicons';
function Taskcard ({type,title,when,done}){
    const date  = useMemo (()=> format(new Date(when), 'dd/mm/yyyy'));
    const hour  = useMemo (()=> format(new Date(when), 'HH:mm'));
    return(
<S.container done={done}>
    <S.Topcard>
        <img src={typeicons[type]} alt="icon"/>
        <h3>{title}</h3>
    </S.Topcard>
    <S.Bottomcard>
        <strong>{date}</strong>
        <span>{hour}</span>
    </S.Bottomcard>
</S.container>
    )
}




export default Taskcard;
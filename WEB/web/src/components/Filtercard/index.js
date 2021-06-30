import React from 'react';
import * as S from './styles';
import filter from '../../assets/funil.png';

function Filtercard({title ,actived }) {
    return( 
        <S.container actived={actived}>
            <img src={filter} alt="filtro" />
            <span>{title}</span>

        </S.container>
    )
}

 export default Filtercard; 
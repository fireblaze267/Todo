import React,{useEffect,useState} from 'react';
import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import isconnected from '../../Utils/isconnected'



function Header({clicknotification}) {

    const [latecount, setlatecount] = useState();

    async function lateVerify(){
        await api.get(`/task/filter/late/${isconnected}`)
        .then(response =>{
          setlatecount(response.data.length)
          
        })
      }

      useEffect(() =>{
          lateVerify();
      })

      async function logout(){
          localStorage.removeItem('@todo/macaddress');
          window.location.reload();
      }

  return (
      <S.container>
          <S.Leftside>
              <img src={logo} alt="logo"/>
          </S.Leftside>
          <S.Rightside>
              <Link to="/">INICIO</Link>
              <span className='dividir'/>
              <Link to="/task">NOVA TAREFA</Link>
              <span className='dividir'/>
              {! isconnected ?
              <Link to='/qrcode'>SINCORNIZAR CELULAR</Link>
              :
              <button type="button" onClick={logout}>SAIR</button>
}
              {
                  latecount &&
                <>
              <span className='dividir'/>
              <button onClick={clicknotification} id="notification">
              <img src={bell} alt="Notificaçäo"/>
              <span id="count">{latecount}</span>
              </button>
              </>
              }
          </S.Rightside>
      </S.container>
  )
}

export default Header;
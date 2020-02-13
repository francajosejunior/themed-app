import React, { useCallback, useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'
import './style.scss'
import LoginInput from '../../components/loginInput/LoginInput'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLoginAction, loginSelector } from './loginSlice'
import LoginButton from '../../components/loginButton'

const loginIdentityImg = require('../../images/login/login-identity.png')
const doneImg = require('../../images/login/done-white.png')
const lockImg = require('../../images/login/lock-white.png')
const arrowImg = require('../../images/login/arrow-foward.png')

export default function Login(params) {
  const [login, setLogin] = useState({ user: '', password: '' })
  const [done, setDone] = useState({ user: false, password: false })
  const [enptyField, setEnptyField] = useState(true)
  const dispatch = useDispatch()
  const auth = useSelector(loginSelector)

  useEffect(() => {
    if (done.user && done.password) {
      setEnptyField(false)
    } else {
      setEnptyField(true)
    }
  }, [done])

  const handleOnChange = useCallback(e => {
    const { name, value } = e.target
    setLogin(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
    setDone(prev => {
      return {
        ...prev,
        [name]: value.length > 0
      }
    })
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(fetchLoginAction(login))
  }

  return (
    <div className="login-app">
      <div className="body-track">
        <div className="login-track">
          <div className="login-logo" />
          <div className="login-welcome">
            <span>Seja bem-vindo!</span>
            <span id="text-warning">
              O conteúdo deste site é restrito, autentifique-se:
            </span>
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <LoginInput
                name="user"
                placeholder="login"
                imgSrc1={loginIdentityImg}
                imgSrc2={doneImg}
                done={done.user}
                autoComplete="off"
                onChange={handleOnChange}
                value={login.user}
              />
              <LoginInput
                name="password"
                placeholder="senha"
                imgSrc1={lockImg}
                imgSrc2={doneImg}
                done={done.password}
                type="password"
                autoComplete="off"
                onChange={handleOnChange}
                value={login.password}
              />
              <LoginButton
                missingField={enptyField}
                loading={auth.authenticating}
                srcImg={arrowImg}
              />
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="support-contact">
            <span>Contate o Suporte</span>
          </div>

          <div className="partner-footer">
            <hr />
            <span>Partner One</span>
          </div>
        </div>
      </div>
    </div>
  )
}

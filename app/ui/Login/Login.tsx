'use client'

import { user } from '@/app/lib/data'
import s from './Login.module.scss'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Typography } from '@mui/material'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const foundUser = user.find(
      (u) => u.userName === userName && u.password === password
    )
    if (foundUser) {
      router.push(`/show`)
    } else {
      setErrorMessage('用户名或密码错误')
    }
  }

  return (
    <div className={s.box}>
      <form onSubmit={handleSubmit}>
        <div className={s.inputbox}>
          <input
            type='text'
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <span>用户名</span>
          <i></i>
        </div>
        <div className={s.inputbox}>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>密码</span>
          <i></i>
        </div>
        {errorMessage && (
          <Typography color='error' fontSize='small'>
            {errorMessage}
          </Typography>
        )}
        <div className={s.links}>
          <a href='#'>忘记密码</a>
          <a href='#'>注册</a>
        </div>
        <input type='submit' value='登录' />
      </form>
    </div>
  )
}

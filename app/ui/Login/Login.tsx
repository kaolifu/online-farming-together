import s from './Login.module.scss'

export default function Login() {
  return (
    <div className={s.box}>
      <form>
        <div className={s.inputbox}>
          <input type='text' required/>
          <span>用户名</span>
          <i></i>
        </div>
        <div className={s.inputbox}>
          <input type='password' required />
          <span>密码</span>
          <i></i>
        </div>
        <div className={s.links}>
          <a href='#'>忘记密码</a>
          <a href='#'>注册</a>
        </div>
        <input type='submit' value='登录' />
      </form>
    </div>
  )
}

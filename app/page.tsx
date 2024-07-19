import Image from 'next/image'
import s from './page.module.scss'
import Login from './ui/Login/Login'

export default function Home() {
  return (
    <main>
      <div className={s.container}>
        <div className={s.bgFrame}>
          <div className={s.background}></div>
          <div className={s.loginForm}>
          <Login />
        </div>
        </div>
        <div className={s.framePosition}>
          <div className={s.frame}>
            <div className={s.logoTop}>
              <Image
                alt='logo'
                src='/assets/logo_top.png'
                width={360}
                height={360}
                className={s.logo}
              />
            </div>
            <Image
              alt='logo'
              src='/assets/logo_bottom.png'
              width={360}
              height={360}
              className={s.logo}
            />
            <div className={s.logoText}>
              <Image
                alt='logo'
                src='/assets/logo_text.png'
                width={360}
                height={360}
                className={s.logo}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

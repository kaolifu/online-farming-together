import Image from 'next/image'
import s from './page.module.scss'
import Login from './ui/Login/Login'

export default function Home() {
  return (
    <main>
      <div className={s.container}>
        <div className={s.background}>
          <h1>
            <Image
              alt='logo'
              src='/assets/logo_withText_white.png'
              width={360}
              height={360}
              className={s.logoContain}
            />
          </h1>
          {/* <Image alt='logo' src='/assets/logo_text_white.png' width={240} height={240} className={s.logoText}/> */}
          <Login/>
        </div>
      </div>
    </main>
  )
}

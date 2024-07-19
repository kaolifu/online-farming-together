import Image from 'next/image'
import s from './Header.module.scss'
import Link from 'next/link'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import MessageRoundedIcon from '@mui/icons-material/MessageRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'

import BasicMenu from '../AnchorMenu/AnchorMenu'
export default function Header() {
  return (
    <>
      <div className={s.container}>
        <nav className={`${s.headerBar} container`}>
          <h1>
            <Link href={'/show'}>
              <Image
                alt='logo'
                src='/assets/logo_white.png'
                width={80}
                height={80}
                className={s.logo}
              />
            </Link>
          </h1>
          <div className={s.links}>
            <div className={s.searchBar}>
              <SearchRoundedIcon fontSize='large' className={s.glassIcon} />
              <input type='text' placeholder='搜索...' />
            </div>
            <div className={s.btn}>
              <NotificationsRoundedIcon fontSize='large' />
            </div>
            <div className={s.btn}>
              <MessageRoundedIcon fontSize='large' />
            </div>
            <div className={s.btn}>
              <StarRateRoundedIcon fontSize='large' />
            </div>
            <div className={s.btn}>
              <ShoppingCartRoundedIcon fontSize='large' />
            </div>
            <div className={s.btn}>
              <BasicMenu anchor={<AccountCircleRoundedIcon fontSize='large' />}>
                <li>我的主页</li>
                <li>
                  <Link href={'/'}>登出账户</Link>
                </li>
              </BasicMenu>
            </div>
          </div>
        </nav>
      </div>
      <div className={s.backfall}></div>
    </>
  )
}

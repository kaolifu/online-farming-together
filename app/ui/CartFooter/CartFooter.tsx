'use client'

import HelpRoundedIcon from '@mui/icons-material/HelpRounded'
import { useState } from 'react'
import s from './CartFooter.module.scss'

interface CartFooterProps {
  price: number | undefined
}

const CartFooter: React.FC<CartFooterProps> = ({ price }) => {
  const [count, setCount] = useState(0)
  const handleCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value, 10)
    if (newCount >= 0) {
      setCount(newCount)
    }
  }

  return (
    <div className={s.footer}>
      <HelpRoundedIcon />
      <input
        type='number'
        placeholder='0'
        onChange={handleCount}
        value={count}
      />
      <p>合计：{price !== undefined ? count * price : NaN}元</p>
      <button className={`${s.btnCart}`}>加入购物车</button>
      <button className={`${s.btnBuyNow}`}>立即购买</button>
    </div>
  )
}

export default CartFooter

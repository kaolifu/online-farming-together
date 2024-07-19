'use client'

import { data } from '@/app/lib/data'
import Image from 'next/image'
import s from './ItemPage.module.scss'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  params: {
    itemId: string
  }
}

export default function ItemPage(props: Props) {
  const [count, setCount] = useState(0)
  const handleCount = (e: any) => {
    const newCount = parseInt(e.target.value, 10)
    if (newCount >= 0) {
      setCount(newCount)
    }
  }

  const { itemId } = props.params
  const item = data.find((item) => item.itemId === itemId)
  if (!item) return
  const {
    type,
    title,
    color,
    coverImage,
    images,
    price,
    maturity,
    packageSize,
    place,
    describe,
  } = item

  return (
    <main>
      <div className={`container mx-auto`}>
        <div className={s.backBtn}>
          <Link href={'/show'}>
            <ArrowBackRoundedIcon fontSize='large' />
          </Link>
        </div>
        <div className={s.card}>
          <div className={s.image}>
            <Image
              alt='item'
              src={coverImage}
              width={360}
              height={360}
              className={s.imageContent}
            />
          </div>
          <div className={s.contain}>
            <div className={s.title}>
              <h2>{title}</h2>
              {price ? (
                <h3>
                  ￥<span>{price}</span>/份
                </h3>
              ) : null}
            </div>
            {maturity ? <p>{maturity}</p> : null}
            {packageSize ? <p>{packageSize}</p> : null}
            {place ? <p>{place}</p> : null}
            {describe ? <p>{describe}</p> : null}
          </div>
          {images?.map((image, index) => (
            <Image
              key={index}
              alt='image'
              src={image}
              width={360}
              height={360}
              className={s.imageContent}
            />
          ))}
          {type === 'product' && (
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
          )}
        </div>
      </div>
    </main>
  )
}

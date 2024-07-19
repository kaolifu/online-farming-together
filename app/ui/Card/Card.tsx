import Image from 'next/image'
import s from './Card.module.scss'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import Link from 'next/link'

interface Item {
  itemId: string
  title?: string
  color?: string
  image?: string
  price?: string
  maturity?: string
  packageSize?: string
  place?: string
  describe?: string
}

export default async function Card({ item }: { item: Item }) {
  const {
    itemId,
    title,
    color,
    image,
    price,
    maturity,
    packageSize,
    place,
    describe,
  } = item
  
  return (
    <div className={s.card}>
      <Link href={`./show/${itemId}`}>
        <div className={s.cardContain} style={{ background: `${color}` }}>
          <div className={s.image}>
            <Image alt='farm' src={image} width={360} height={360} />
          </div>
          <div className={s.title}>
            <h2>{title}</h2>
            {price ? (
              <h3>
                ￥<span>{price}</span>/份
              </h3>
            ) : null}
          </div>
          {maturity ? <p className={s.maturity}>{maturity}</p> : null}
          {packageSize ? <p className={s.packageSize}>{packageSize}</p> : null}
          {place ? <p className={s.place}>{place}</p> : null}
          {describe ? <p className={s.place}>{describe}</p> : null}
        </div>
        <div className={s.mask}>
          <div className={s.links}>
            <div className={s.btn}>
              <ShareRoundedIcon />
            </div>
            <div className={s.btn}>
              <ShoppingCartRoundedIcon />
            </div>
            <div className={s.btn}>
              <StarOutlineRoundedIcon />
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

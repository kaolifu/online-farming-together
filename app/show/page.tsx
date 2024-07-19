import Card from '@/app/ui/Card/Card'
import s from './page.module.scss'
import { data } from '@/app/lib/data'
import Link from 'next/link'

export default function ShowPage() {
  return (
    <div className={`container mx-auto`}>
      <div className={s.cards}>
        {data.map((item, index) => (
          <div className={s.cardFrame} key={index}>
            <Link href={`/show/${item.itemId}`}>
              <Card item={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

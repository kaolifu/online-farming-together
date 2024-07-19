import { data } from '../lib/data'
import Card from '../ui/Card/Card'
import s from './page.module.scss'

export default function ShowPage() {
  return (
    <div className={`container mx-auto`}>
      <div className={s.cards}>
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

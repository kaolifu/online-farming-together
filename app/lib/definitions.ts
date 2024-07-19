export type Item = {
  itemId: string
  type: 'product' | 'blog'
  title: string
  color: string
  coverImage: string
  images?:string[]
  price?: number
  maturity?: string
  packageSize?: string
  place?: string
  describe?: string
  text?:string
}

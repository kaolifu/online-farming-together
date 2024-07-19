export type Item = {
  itemId: string
  type: 'product' | 'blog'
  title: string
  color: string
  coverImage: string
  images?:string[]
  video?:string
  price?: number
  maturity?: string
  packageSize?: string
  place?: string
  describe?: string
  text?:string
}

export type User = {
  userName:string
  password:string
}
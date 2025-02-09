import { Item, User } from './definitions'

const colors = {
  rice: '#FFE9A5',
  pear: '#A2B71E',
  appleGreen: '#A0C132',
  appleRed: '#E63420',
  orange: '#FF9015',
  sweePotato: '#A43E2A',
  melon: '#BFD276',
  mangoGreen: '#C4D61E',
  mangoYellow: '#FFB001',
  peach: '#FE6D6C',
  flower: '#FBA1A1',
  strawberry: '#E66963',
  riceRed: '#F6D2C6',
  coffee: '#71441B',
  millet: '#D08043',
  cron: '#D5E896',
}

export const user: User[] = [
  {
    userName: '123',
    password: '123',
  },
]

export const data: Item[] = [
  {
    itemId: '00',
    type: 'product',
    title: '富士苹果',
    color: colors.appleRed,
    coverImage: '/assets/farm/Apple.jpg',
    images: [
      '/assets/farm/apple_1.jpg',
      '/assets/farm/apple_2.jpg',
      '/assets/farm/apple_3.jpg',
    ],
    price: 288,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '01',
    type: 'product',
    title: '芒果',
    color: colors.mangoYellow,
    coverImage: '/assets/farm/mango.jpg',
    price: 199,
    maturity: '预计成熟时间：6月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '02',
    type: 'product',
    title: '大米',
    color: colors.rice,
    coverImage: '/assets/farm/rice.jpg',
    price: 78,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '03',
    type: 'product',
    title: '西瓜',
    color: colors.melon,
    coverImage: '/assets/farm/watermelon.jpg',
    price: 168,
    maturity: '预计成熟时间：6月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '04',
    type: 'product',
    title: '咖啡',
    color: colors.coffee,
    coverImage: '/assets/farm/coffee.jpg',
    price: 166,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '05',
    type: 'blog',
    title: '咖啡之旅',
    color: colors.appleGreen,
    coverImage: '/assets/farm/coffeeBlog.jpg',
    describe:
      '云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园',
  },
  {
    itemId: '06',
    type: 'blog',
    title: '禾作计划|在哈尼梯田有块自己的地是啥体验？',
    color: colors.riceRed,
    coverImage: '/assets/video/video_01_cover.jpg',
    video: '/assets/video/video_01.mp4',
    describe:
      '家人们，谁能想到啊？我真的在云南哈尼拥有了一块属于自己的梯田！禾作计划的梯田长什么样子呢？快跟我来一起看看吧！在云南元阳哈尼梯田，禾作计划总共有300多亩的认养稻田。哪怕离开哈尼，也可以通过摄像头，远景观赏梯田美景，近景看稻米丛生，鱼跃鸭眠，耳畔回响虫鸣鸟啼。守一方梯田，采菊东篱下，悠然见南山。☁️云端陪伴，待到秋季就能收获打包好的红米还有稻田鸭的鲜鸭蛋。身临其境，参与感满🈵️！梯田红米已在禾作计划全面上线快来认养你的专属梯田吧！',
  },
  {
    itemId: '00',
    type: 'product',
    title: '富士苹果',
    color: colors.appleRed,
    coverImage: '/assets/farm/Apple.jpg',
    images: [
      '/assets/farm/apple_1.jpg',
      '/assets/farm/apple_2.jpg',
      '/assets/farm/apple_3.jpg',
    ],
    price: 288,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '01',
    type: 'product',
    title: '芒果',
    color: colors.mangoYellow,
    coverImage: '/assets/farm/mango.jpg',
    price: 199,
    maturity: '预计成熟时间：6月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '02',
    type: 'product',
    title: '大米',
    color: colors.rice,
    coverImage: '/assets/farm/rice.jpg',
    price: 78,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '03',
    type: 'product',
    title: '西瓜',
    color: colors.melon,
    coverImage: '/assets/farm/watermelon.jpg',
    price: 168,
    maturity: '预计成熟时间：6月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '04',
    type: 'product',
    title: '咖啡',
    color: colors.coffee,
    coverImage: '/assets/farm/coffee.jpg',
    price: 166,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '05',
    type: 'blog',
    title: '咖啡之旅',
    color: colors.appleGreen,
    coverImage: '/assets/farm/coffeeBlog.jpg',
    describe:
      '云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园',
  },
  {
    itemId: '06',
    type: 'blog',
    title: '禾作计划|在哈尼梯田有块自己的地是啥体验？',
    color: colors.riceRed,
    coverImage: '/assets/video/video_01_cover.jpg',
    video: '/assets/video/video_01.mp4',
    describe:
      '家人们，谁能想到啊？我真的在云南哈尼拥有了一块属于自己的梯田！禾作计划的梯田长什么样子呢？快跟我来一起看看吧！在云南元阳哈尼梯田，禾作计划总共有300多亩的认养稻田。哪怕离开哈尼，也可以通过摄像头，远景观赏梯田美景，近景看稻米丛生，鱼跃鸭眠，耳畔回响虫鸣鸟啼。守一方梯田，采菊东篱下，悠然见南山。☁️云端陪伴，待到秋季就能收获打包好的红米还有稻田鸭的鲜鸭蛋。身临其境，参与感满🈵️！梯田红米已在禾作计划全面上线快来认养你的专属梯田吧！',
  },
  {
    itemId: '00',
    type: 'product',
    title: '富士苹果',
    color: colors.appleRed,
    coverImage: '/assets/farm/Apple.jpg',
    images: [
      '/assets/farm/apple_1.jpg',
      '/assets/farm/apple_2.jpg',
      '/assets/farm/apple_3.jpg',
    ],
    price: 288,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '01',
    type: 'product',
    title: '芒果',
    color: colors.mangoYellow,
    coverImage: '/assets/farm/mango.jpg',
    price: 199,
    maturity: '预计成熟时间：6月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '02',
    type: 'product',
    title: '大米',
    color: colors.rice,
    coverImage: '/assets/farm/rice.jpg',
    price: 78,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '03',
    type: 'product',
    title: '西瓜',
    color: colors.melon,
    coverImage: '/assets/farm/watermelon.jpg',
    price: 168,
    maturity: '预计成熟时间：6月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '04',
    type: 'product',
    title: '咖啡',
    color: colors.coffee,
    coverImage: '/assets/farm/coffee.jpg',
    price: 166,
    maturity: '预计成熟时间：11月',
    packageSize: '箱规：4斤/箱',
    place: '产地：辽宁朝阳',
  },
  {
    itemId: '05',
    type: 'blog',
    title: '咖啡之旅',
    color: colors.appleGreen,
    coverImage: '/assets/farm/coffeeBlog.jpg',
    describe:
      '云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园云南·普洱野鸭塘河谷咖啡庄园',
  },
  {
    itemId: '06',
    type: 'blog',
    title: '禾作计划|在哈尼梯田有块自己的地是啥体验？',
    color: colors.riceRed,
    coverImage: '/assets/video/video_01_cover.jpg',
    video: '/assets/video/video_01.mp4',
    describe:
      '家人们，谁能想到啊？我真的在云南哈尼拥有了一块属于自己的梯田！禾作计划的梯田长什么样子呢？快跟我来一起看看吧！在云南元阳哈尼梯田，禾作计划总共有300多亩的认养稻田。哪怕离开哈尼，也可以通过摄像头，远景观赏梯田美景，近景看稻米丛生，鱼跃鸭眠，耳畔回响虫鸣鸟啼。守一方梯田，采菊东篱下，悠然见南山。☁️云端陪伴，待到秋季就能收获打包好的红米还有稻田鸭的鲜鸭蛋。身临其境，参与感满🈵️！梯田红米已在禾作计划全面上线快来认养你的专属梯田吧！',
  },
]

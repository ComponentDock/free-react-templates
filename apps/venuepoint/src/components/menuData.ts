export interface Dish {
  title: string
  price: string
  ingredients: string[]
}

export interface MenuCategory {
  title: string
  dishes: Dish[]
}

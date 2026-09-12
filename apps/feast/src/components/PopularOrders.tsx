import { Button } from '@free-react-templates/ui'

const orders = [
  {
    name: 'Western Set Meal 01',
    price: '10.00',
    image: 'https://picsum.photos/seed/feast-meal-1/400/300',
    items: [
      'Chicken Fried Rice',
      'Crispy Chicken Fry',
      'Western Pickle',
      'Mixed Vegetable',
      'Soft Drinks',
    ],
  },
  {
    name: 'Western Set Meal 02',
    price: '12.00',
    image: 'https://picsum.photos/seed/feast-meal-2/400/300',
    items: ['Grilled Salmon', 'Caesar Salad', 'Garlic Bread', 'Mashed Potato', 'Sparkling Water'],
  },
  {
    name: 'Western Set Meal 03',
    price: '15.00',
    image: 'https://picsum.photos/seed/feast-meal-3/400/300',
    items: ['Beef Steak', 'French Fries', 'Garden Salad', 'Coleslaw', 'Iced Tea'],
  },
  {
    name: 'Eastern Set Meal 01',
    price: '11.00',
    image: 'https://picsum.photos/seed/feast-meal-4/400/300',
    items: ['Teriyaki Chicken', 'Steamed Rice', 'Miso Soup', 'Edamame', 'Green Tea'],
  },
  {
    name: 'Eastern Set Meal 02',
    price: '13.00',
    image: 'https://picsum.photos/seed/feast-meal-5/400/300',
    items: ['Kung Pao Shrimp', 'Fried Rice', 'Spring Rolls', 'Wonton Soup', 'Jasmine Tea'],
  },
  {
    name: 'Eastern Set Meal 03',
    price: '14.00',
    image: 'https://picsum.photos/seed/feast-meal-6/400/300',
    items: ['Sweet & Sour Pork', 'Noodles', 'Dim Sum', 'Hot & Sour Soup', 'Oolong Tea'],
  },
] as const

export function PopularOrders() {
  return (
    <section id="menu" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Orders</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Discover our most popular catering packages. Each meal is carefully prepared with fresh
            ingredients and presented with style.
          </p>
        </div>

        {/* Order grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {orders.map((order) => (
            <div key={order.name} className="overflow-hidden rounded-lg bg-white shadow-md">
              <div className="relative">
                <img
                  src={order.image}
                  alt={order.name}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-full bg-primary-500 px-3 py-1 text-sm font-bold text-white">
                  ${order.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">{order.name}</h3>
                <ul className="mt-3 space-y-1 text-sm text-gray-500">
                  {order.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Button className="mt-4 w-full bg-primary-500 text-white hover:bg-primary-600">
                  Order Now!
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

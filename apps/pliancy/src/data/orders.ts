export interface OrderRow {
  date: string
  orderId: string
  name: string
  price: string
  quantity: string
  total: string
}

/**
 * Orders log dataset (6 columns × 14 rows). The final four rows repeat the
 * preceding four order entries — kept verbatim so the dataset stays
 * deterministic across renders and snapshot comparisons.
 */
export const orders: OrderRow[] = [
  {
    date: '2017-09-29 01:22',
    orderId: '200398',
    name: 'iPhone X 64Gb Grey',
    price: '$999.00',
    quantity: '1',
    total: '$999.00',
  },
  {
    date: '2017-09-28 05:57',
    orderId: '200397',
    name: 'Samsung S8 Black',
    price: '$756.00',
    quantity: '1',
    total: '$756.00',
  },
  {
    date: '2017-09-26 05:57',
    orderId: '200396',
    name: 'Game Console Controller',
    price: '$22.00',
    quantity: '2',
    total: '$44.00',
  },
  {
    date: '2017-09-25 23:06',
    orderId: '200392',
    name: 'USB 3.0 Cable',
    price: '$10.00',
    quantity: '3',
    total: '$30.00',
  },
  {
    date: '2017-09-24 05:57',
    orderId: '200391',
    name: 'Smartwatch 4.0 LTE Wifi',
    price: '$199.00',
    quantity: '6',
    total: '$1494.00',
  },
  {
    date: '2017-09-23 05:57',
    orderId: '200390',
    name: 'Camera C430W 4k',
    price: '$699.00',
    quantity: '1',
    total: '$699.00',
  },
  {
    date: '2017-09-22 05:57',
    orderId: '200389',
    name: 'Macbook Pro Retina 2017',
    price: '$2199.00',
    quantity: '1',
    total: '$2199.00',
  },
  {
    date: '2017-09-21 05:57',
    orderId: '200388',
    name: 'Game Console Controller',
    price: '$999.00',
    quantity: '1',
    total: '$999.00',
  },
  {
    date: '2017-09-19 05:57',
    orderId: '200387',
    name: 'iPhone X 64Gb Grey',
    price: '$999.00',
    quantity: '1',
    total: '$999.00',
  },
  {
    date: '2017-09-18 05:57',
    orderId: '200386',
    name: 'iPhone X 64Gb Grey',
    price: '$999.00',
    quantity: '1',
    total: '$999.00',
  },
  {
    date: '2017-09-22 05:57',
    orderId: '200389',
    name: 'Macbook Pro Retina 2017',
    price: '$2199.00',
    quantity: '1',
    total: '$2199.00',
  },
  {
    date: '2017-09-21 05:57',
    orderId: '200388',
    name: 'Game Console Controller',
    price: '$999.00',
    quantity: '1',
    total: '$999.00',
  },
  {
    date: '2017-09-19 05:57',
    orderId: '200387',
    name: 'iPhone X 64Gb Grey',
    price: '$999.00',
    quantity: '1',
    total: '$999.00',
  },
  {
    date: '2017-09-18 05:57',
    orderId: '200386',
    name: 'iPhone X 64Gb Grey',
    price: '$999.00',
    quantity: '1',
    total: '$999.00',
  },
]

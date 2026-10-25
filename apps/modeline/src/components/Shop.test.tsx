import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Shop } from './Shop'
import { products } from '../data'

describe('Shop', () => {
  it('shows four cards with distinct names and prices', () => {
    render(<Shop />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4)
    const names = products.map((product) => product.name)
    const prices = products.map((product) => product.price)
    expect(new Set(names).size).toBe(4)
    expect(new Set(prices).size).toBe(4)

    expect(screen.getByRole('heading', { level: 3, name: 'Black Coat' })).toHaveClass(
      'text-[26px]',
      'font-normal',
    )
    expect(screen.getByText('$340')).toHaveClass('italic', 'text-body')
    expect(screen.getByAltText('Black Coat')).toHaveClass('aspect-[264/411]', 'mb-[40px]')
  })

  it('confirms an addition inline without a network call', async () => {
    const user = userEvent.setup()
    render(<Shop />)

    expect(screen.getByRole('status')).toHaveTextContent('')

    await user.click(screen.getByRole('button', { name: 'Add Black Dress to cart' }))

    expect(screen.getByRole('button', { name: 'Add Black Dress to cart' })).toHaveClass(
      'min-w-[130px]',
      'bg-ink',
    )
    expect(screen.getByRole('status')).toHaveTextContent('Black Dress added to your bag.')
  })
})

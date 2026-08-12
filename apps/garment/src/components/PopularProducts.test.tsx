import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PopularProducts } from './PopularProducts'

describe('PopularProducts', () => {
  it('shows the heading and four product cards with names and prices', () => {
    render(<PopularProducts />)

    expect(screen.getByRole('heading', { name: 'Popular Products' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(4)

    expect(screen.getByText('Knot Front Mini Dress')).toBeInTheDocument()
    expect(screen.getByText('Poplin Displaced Wrap Dress')).toBeInTheDocument()
    expect(screen.getByText('PETITE Crepe Wrap Mini Dress')).toBeInTheDocument()
    expect(screen.getByText('PETITE Belted Jumper Dress')).toBeInTheDocument()
    expect(screen.getAllByText('$80.00')).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Add to Cart' })).toHaveLength(4)
  })

  it('renders the offer and new badges on the right cards', () => {
    render(<PopularProducts />)

    const saleCard = screen.getByText('PETITE Crepe Wrap Mini Dress').closest('article')!
    expect(within(saleCard).getByText('-30%')).toBeInTheDocument()

    const newCard = screen.getByText('PETITE Belted Jumper Dress').closest('article')!
    expect(within(newCard).getByText('New')).toBeInTheDocument()

    const plainCard = screen.getByText('Knot Front Mini Dress').closest('article')!
    expect(within(plainCard).queryByText('-30%')).not.toBeInTheDocument()
  })

  it('shows the struck-through old price next to the red sale price', () => {
    render(<PopularProducts />)

    expect(screen.getByText('$55.00')).toBeInTheDocument()
    const oldPrice = screen.getByText('$75.00')
    expect(oldPrice).toHaveClass('line-through')
  })

  it('toggles the favourite heart on a product card', async () => {
    const user = userEvent.setup()
    render(<PopularProducts />)

    const favourite = screen.getByRole('button', {
      name: 'Add Knot Front Mini Dress to favourites',
    })
    const heart = favourite.querySelector('svg')!
    expect(heart.getAttribute('class')).not.toContain('fill-accent')

    await user.click(favourite)
    expect(heart.getAttribute('class')).toContain('fill-accent')

    await user.click(favourite)
    expect(heart.getAttribute('class')).not.toContain('fill-accent')
  })
})

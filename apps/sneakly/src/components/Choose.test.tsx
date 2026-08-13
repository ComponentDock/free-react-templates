import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Choose } from './Choose'

describe('Choose', () => {
  it('renders the four category cards with subheadings and headings', () => {
    render(<Choose />)

    for (const title of [
      "Men's Collection",
      "Women's Collection",
      'Extra 50% Off',
      'Best Sellers',
    ]) {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument()
    }
    for (const subheading of ["Men's Shoes", "Women's Shoes", 'Summer Sale', 'Shoes']) {
      expect(screen.getByText(subheading)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Shop now' })).toHaveLength(4)
  })

  it('renders photos on the three image cards only', () => {
    const { container } = render(<Choose />)

    expect(container.querySelectorAll('img')).toHaveLength(3)
  })

  it('renders a dark text treatment on image cards and light on the sale card', () => {
    render(<Choose />)

    const menCard = screen.getByText("Men's Collection").closest('div')!.parentElement!
    expect(menCard).toHaveClass('text-white')

    const extraCard = screen
      .getByRole('heading', { name: 'Extra 50% Off' })
      .closest('div')!.parentElement!
    expect(extraCard).toHaveClass('bg-light')
  })

  it('keeps a link target on the shop-now buttons', () => {
    render(<Choose />)

    const shopNow = screen.getAllByRole('link', { name: 'Shop now' })[0]!
    expect(shopNow).toHaveAttribute('href', '#products')
    expect(within(shopNow).getByText('Shop now')).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)

    // Topbar
    expect(screen.getByText('3-5 Business days delivery & Free Returns')).toBeInTheDocument()
    // Navbar
    expect(screen.getByRole('link', { name: 'Sneakly' })).toBeInTheDocument()
    // Hero
    expect(
      screen.getByRole('heading', { level: 1, name: 'Shoes Collection 2019' }),
    ).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: 'Free Shipping' })).toBeInTheDocument()
    // Products
    expect(screen.getByRole('heading', { name: 'New Shoes Arrival' })).toBeInTheDocument()
    // Choose
    expect(screen.getByRole('heading', { name: "Men's Collection" })).toBeInTheDocument()
    // Deal
    expect(screen.getByRole('heading', { name: 'Deal of the month' })).toBeInTheDocument()
    expect(screen.getByText('Days')).toBeInTheDocument()
    // Testimonials
    expect(screen.getByRole('heading', { name: 'Our satisfied customer says' })).toBeInTheDocument()
    // Gallery
    expect(screen.getByRole('heading', { name: 'Follow Us On Instagram' })).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders the sections in order within the main landmark', () => {
    const { container } = render(<App />)

    const main = container.querySelector('main')!
    const headings = Array.from(main.querySelectorAll('h2')).map((node) => node.textContent)
    expect(headings).toEqual([
      'New Shoes Arrival',
      "Men's Collection",
      "Women's Collection",
      'Extra 50% Off',
      'Best Sellers',
      'Deal of the month',
      'Our satisfied customer says',
      'Follow Us On Instagram',
    ])
  })
})

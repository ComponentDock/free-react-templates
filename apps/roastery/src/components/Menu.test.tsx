import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders the section heading', () => {
    render(<Menu />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Explore Our Blends/i }),
    ).toBeInTheDocument()
  })

  it('renders all six menu items by default', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { name: /Classic Espresso/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Cappuccino/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pour Over/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Cold Brew/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Caramel Latte/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Mocha Delight/i })).toBeInTheDocument()
  })

  it('filters items when a category button is clicked', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('button', { name: /Espresso/i }))
    expect(screen.getByRole('heading', { name: /Classic Espresso/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Cappuccino/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /Pour Over/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /Cold Brew/i })).not.toBeInTheDocument()
  })

  it('shows all items when "All" filter is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('button', { name: /Espresso/i }))
    await user.click(screen.getByRole('button', { name: /^All$/ }))
    expect(screen.getByRole('heading', { name: /Classic Espresso/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pour Over/i })).toBeInTheDocument()
  })

  it('displays prices for menu items', () => {
    render(<Menu />)
    expect(screen.getByText('$3.50')).toBeInTheDocument()
    expect(screen.getByText('$4.50')).toBeInTheDocument()
  })

  it('renders menu item images', () => {
    render(<Menu />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

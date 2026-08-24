import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders the section heading', () => {
    render(<Menu />)
    expect(
      screen.getByRole('heading', { level: 2, name: /most popular dishes/i }),
    ).toBeInTheDocument()
  })

  it('renders all tab buttons', () => {
    render(<Menu />)
    expect(screen.getByRole('tab', { name: 'Breakfast' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Lunches' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Dinner' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Drinks' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Fastfood' })).toBeInTheDocument()
  })

  it('defaults to Breakfast tab selected', () => {
    render(<Menu />)
    const breakfastTab = screen.getByRole('tab', { name: 'Breakfast' })
    expect(breakfastTab).toHaveAttribute('aria-selected', 'true')
  })

  it('shows breakfast dishes by default', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 3, name: 'Hamburger' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Sandwich' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Pancakes' })).toBeInTheDocument()
  })

  it('switches to Lunches tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Lunches' }))

    expect(screen.getByRole('tab', { name: 'Lunches' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('heading', { level: 3, name: 'Tuna Steak' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Caesar Salad' })).toBeInTheDocument()
  })

  it('switches to Dinner tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Dinner' }))

    expect(screen.getByRole('heading', { level: 3, name: 'Grilled Salmon' })).toBeInTheDocument()
  })

  it('switches to Drinks tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Drinks' }))

    expect(screen.getByRole('heading', { level: 3, name: 'Craft Mojito' })).toBeInTheDocument()
  })

  it('switches to Fastfood tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Fastfood' }))

    expect(screen.getByRole('heading', { level: 3, name: 'Classic Burger' })).toBeInTheDocument()
  })

  it('renders Full Menu link', () => {
    render(<Menu />)
    expect(screen.getByRole('link', { name: 'Full Menu' })).toBeInTheDocument()
  })

  it('renders Order Now buttons for each dish', () => {
    render(<Menu />)
    const orderButtons = screen.getAllByRole('button', { name: 'Order Now' })
    expect(orderButtons.length).toBe(3) // 3 dishes per tab
  })

  it('renders dish images', () => {
    render(<Menu />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})

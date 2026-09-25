import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders the section heading and default tab', () => {
    render(<Menu />)
    expect(screen.getByRole('heading', { level: 2, name: /^menu$/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /breakfast/i })).toHaveAttribute('aria-selected', 'true')
  })

  it('shows 4 breakfast items by default', () => {
    render(<Menu />)
    expect(screen.getByText('Warm Spinach Dip & Chips')).toBeInTheDocument()
    expect(screen.getByText('$10.49')).toBeInTheDocument()
    expect(screen.getAllByText(/\$\d+\.\d+/)).toHaveLength(4)
  })

  it('switches to Brunch tab and shows different items', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: /brunch/i }))
    expect(screen.getByRole('tab', { name: /brunch/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Jumbo Lump Crab Stack')).toBeInTheDocument()
    expect(screen.getByText('$12.49')).toBeInTheDocument()
  })

  it('switches to Dinner tab and shows different items', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: /dinner/i }))
    expect(screen.getByRole('tab', { name: /dinner/i })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Seared Ahi Tuna & Avocado')).toBeInTheDocument()
    expect(screen.getByText('$16.99')).toBeInTheDocument()
  })
})

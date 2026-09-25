import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders section heading', () => {
    render(<Menu />)
    expect(screen.getByText('Delicious Menu')).toBeInTheDocument()
  })

  it('renders all three tabs', () => {
    render(<Menu />)
    expect(screen.getByRole('tab', { name: 'Breakfast' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Lunch' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Dinner' })).toBeInTheDocument()
  })

  it('shows breakfast items by default', () => {
    render(<Menu />)
    expect(screen.getByText('Salted Fried Chicken')).toBeInTheDocument()
    expect(screen.getByText('Italian Sauce Mushroom')).toBeInTheDocument()
    expect(screen.getByText('$35.50')).toBeInTheDocument()
  })

  it('switches to lunch tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Lunch' }))
    expect(screen.getByText('Grilled Chicken Wrap')).toBeInTheDocument()
    expect(screen.queryByText('Salted Fried Chicken')).not.toBeInTheDocument()
  })

  it('switches to dinner tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Dinner' }))
    expect(screen.getByText('Ribeye Steak')).toBeInTheDocument()
    expect(screen.getByText('$45.00')).toBeInTheDocument()
  })
})

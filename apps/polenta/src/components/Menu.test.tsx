import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Menu } from './Menu'

describe('Menu', () => {
  it('renders the section header', () => {
    render(<Menu />)
    expect(screen.getByText('Discover')).toBeInTheDocument()
    expect(screen.getByText('Our Menu')).toBeInTheDocument()
  })

  it('renders all tab buttons', () => {
    render(<Menu />)
    expect(screen.getByRole('tab', { name: 'Dinner' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Drinks' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Lunch' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Dessert' })).toBeInTheDocument()
  })

  it('shows Dinner tab as active by default', () => {
    render(<Menu />)
    const dinnerTab = screen.getByRole('tab', { name: 'Dinner' })
    expect(dinnerTab).toHaveAttribute('aria-selected', 'true')
  })

  it('shows dinner dishes by default', () => {
    render(<Menu />)
    expect(screen.getByText('Basted Rhubarb Mussels')).toBeInTheDocument()
    expect(screen.getAllByText('£57').length).toBeGreaterThanOrEqual(1)
  })

  it('switches to Drinks tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Drinks' }))
    expect(screen.getByRole('tab', { name: 'Drinks' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Chianti Classico')).toBeInTheDocument()
    expect(screen.queryByText('Basted Rhubarb Mussels')).not.toBeInTheDocument()
  })

  it('switches to Lunch tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Lunch' }))
    expect(screen.getByText('Tenderized Egg & Coconut Duck')).toBeInTheDocument()
  })

  it('switches to Dessert tab on click', async () => {
    const user = userEvent.setup()
    render(<Menu />)
    await user.click(screen.getByRole('tab', { name: 'Dessert' }))
    expect(screen.getByText('Tiramisu Classico')).toBeInTheDocument()
  })

  it('shows dish descriptions', () => {
    render(<Menu />)
    expect(screen.getByText(/Delicately prepared with fresh rhubarb/)).toBeInTheDocument()
  })

  it('tabpanel has correct role', () => {
    render(<Menu />)
    expect(screen.getByRole('tabpanel')).toBeInTheDocument()
  })
})

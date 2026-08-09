import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and all four package cards', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Choose Your Clean' })).toBeInTheDocument()
    for (const name of ['Basic Clean', 'Deep Clean', 'Move-In/Out', 'Commercial']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(screen.getByText('$99')).toBeInTheDocument()
    expect(screen.getByText('$199')).toBeInTheDocument()
    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('Custom')).toBeInTheDocument()
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Basic' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Deep Clean' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book Move Clean' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Quote' })).toBeInTheDocument()
  })

  it('lists features for each package', () => {
    render(<Pricing />)

    expect(screen.getByText('Dusting all surfaces')).toBeInTheDocument()
    expect(screen.getByText('Everything in Basic')).toBeInTheDocument()
    expect(screen.getByText('Wall spot cleaning')).toBeInTheDocument()
    expect(screen.getByText('Dedicated account manager')).toBeInTheDocument()
  })

  it('reflects the selected frequency in the toggle', async () => {
    const user = userEvent.setup()
    render(<Pricing />)

    expect(screen.getByRole('button', { name: 'One-Time' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByText('Showing One-Time pricing')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Weekly' }))
    expect(screen.getByRole('button', { name: 'Weekly' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'One-Time' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.getByText('Showing Weekly pricing')).toBeInTheDocument()
  })
})

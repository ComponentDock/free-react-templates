import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { departments } from '../data'
import { HeroRow } from './HeroRow'

describe('HeroRow', () => {
  it('renders the departments bar collapsed by default', () => {
    render(<HeroRow />)

    const toggle = screen.getByRole('button', { name: 'All departments' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Fresh Meat' })).not.toBeInTheDocument()
  })

  it('opens the departments dropdown listing all 11 departments and closes on selection', async () => {
    const user = userEvent.setup()
    render(<HeroRow />)

    const toggle = screen.getByRole('button', { name: 'All departments' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    for (const department of departments) {
      expect(screen.getByRole('link', { name: department })).toBeInTheDocument()
    }

    await user.click(screen.getByRole('link', { name: 'Oatmeal' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders the search bar with category select and SEARCH button', () => {
    render(<HeroRow />)

    expect(screen.getByRole('searchbox', { name: 'Search products' })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: 'All Categories' })).toHaveValue('all')
    expect(screen.getByRole('button', { name: /SEARCH/ })).toBeInTheDocument()
  })

  it('renders the support phone block', () => {
    render(<HeroRow />)

    expect(screen.getByRole('heading', { name: '+65 11.188.888' })).toBeInTheDocument()
    expect(screen.getByText('support 24/7 time')).toBeInTheDocument()
  })
})

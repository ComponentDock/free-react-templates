import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarOffers } from './CarOffers'

describe('CarOffers', () => {
  it('renders the heading, filter tabs, and car cards with names and prices', () => {
    render(<CarOffers />)
    expect(screen.getByRole('heading', { name: 'Best Vehicle Offers' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Most Researched' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Latest on sale' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(screen.getByText('Porsche Cayenne Turbo S')).toBeInTheDocument()
    expect(screen.getByText('Audi e-tron')).toBeInTheDocument()
    expect(screen.getByText('$35,000')).toBeInTheDocument()
    expect(screen.getAllByText('For Rent')).toHaveLength(3)
    expect(screen.getAllByText('For Sale')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Rent Now' })).toHaveLength(6)
  })

  it('switches the active filter tab', async () => {
    const user = userEvent.setup()
    render(<CarOffers />)
    await user.click(screen.getByRole('button', { name: 'Latest on sale' }))
    expect(screen.getByRole('button', { name: 'Latest on sale' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Most Researched' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
  })
})

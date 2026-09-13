import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Discover } from './Discover'

describe('Discover', () => {
  it('renders the Discover Seaview Hotel heading', () => {
    render(<Discover />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: /Discover Seaview Hotel/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the Discover button', () => {
    render(<Discover />)

    expect(screen.getByRole('link', { name: /Discover/i })).toBeInTheDocument()
  })

  it('renders service cards for Weddings, Parties, and Relax', () => {
    render(<Discover />)

    expect(screen.getByRole('heading', { level: 3, name: 'Weddings' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Parties' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Relax' })).toBeInTheDocument()
  })
})

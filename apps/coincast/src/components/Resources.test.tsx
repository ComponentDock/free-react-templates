import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Resources } from './Resources'

describe('Resources', () => {
  it('renders the section title', () => {
    render(<Resources />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Resources')
  })

  it('renders 3 resource cards', () => {
    render(<Resources />)
    expect(screen.getByText('Crypto Education')).toBeInTheDocument()
    expect(screen.getByText('Market Insights')).toBeInTheDocument()
    expect(screen.getByText('Support Center')).toBeInTheDocument()
  })

  it('renders resource descriptions', () => {
    render(<Resources />)
    expect(screen.getByText(/Comprehensive guides/)).toBeInTheDocument()
    expect(screen.getByText(/Daily market analysis/)).toBeInTheDocument()
    expect(screen.getByText(/24\/7 support/)).toBeInTheDocument()
  })
})

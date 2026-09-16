import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestDonations } from './LatestDonations'

describe('LatestDonations', () => {
  it('renders the section heading', () => {
    render(<LatestDonations />)
    expect(screen.getByRole('heading', { name: /Latest Donations/i })).toBeInTheDocument()
  })

  it('renders all three donation cards', () => {
    render(<LatestDonations />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('displays donation amounts', () => {
    render(<LatestDonations />)
    expect(screen.getByText('$250.00')).toBeInTheDocument()
    expect(screen.getByText('$150.00')).toBeInTheDocument()
    expect(screen.getByText('$500.00')).toBeInTheDocument()
  })
})

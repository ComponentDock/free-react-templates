import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the Join Us in Prayer strip with the four office times', () => {
    render(<Footer />)
    expect(screen.getByText('Join Us in Prayer')).toBeInTheDocument()
    expect(screen.getAllByText('6:30 AM').length).toBeGreaterThan(0)
    expect(screen.getAllByText('12:00 PM').length).toBeGreaterThan(0)
    expect(screen.getAllByText('5:30 PM').length).toBeGreaterThan(0)
    expect(screen.getAllByText('8:30 PM').length).toBeGreaterThan(0)
  })

  it('renders the three link columns and contact details', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument()
    expect(screen.getByText('welcome@hushretreat.org')).toBeInTheDocument()
    expect(screen.getByText('1247 Monastery Road, Cedar Valley, OR 97330')).toBeInTheDocument()
  })

  it('renders the bottom bar with a scripture quote and copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Come to me, all you who are weary/)).toBeInTheDocument()
    expect(
      screen.getByText(`© ${new Date().getFullYear()} Hush Retreat. All rights reserved.`),
    ).toBeInTheDocument()
  })
})

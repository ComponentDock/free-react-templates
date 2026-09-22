import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FanClubCTA } from './FanClubCTA'

describe('FanClubCTA', () => {
  it('renders the heading', () => {
    render(<FanClubCTA />)
    expect(screen.getByText('Join Our Fan Club and Get Free Tickets')).toBeInTheDocument()
  })

  it('renders the Register button', () => {
    render(<FanClubCTA />)
    expect(screen.getByText('Register')).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<FanClubCTA />)
    expect(screen.getByText('Join Our Team')).toBeInTheDocument()
  })
})

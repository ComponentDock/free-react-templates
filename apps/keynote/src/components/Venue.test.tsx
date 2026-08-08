import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Venue } from './Venue'

describe('Venue', () => {
  it('renders the heading, description, address and directions link', () => {
    render(<Venue />)
    expect(screen.getByRole('heading', { name: 'The Armory' })).toBeInTheDocument()
    expect(screen.getByText(/stunning industrial venue/i)).toBeInTheDocument()
    expect(screen.getByText(/1800 Mission Street, San Francisco, CA 94103/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Directions' })).toBeInTheDocument()
  })

  it('renders the venue features', () => {
    render(<Venue />)
    expect(screen.getByText(/100Gbps dedicated internet/i)).toBeInTheDocument()
    expect(screen.getByText(/BART & Muni accessible/i)).toBeInTheDocument()
  })

  it('renders the nearby hotels', () => {
    render(<Venue />)
    expect(screen.getByRole('heading', { name: /Nearby Hotels/i })).toBeInTheDocument()
    for (const hotel of ['The Foundry Hotel', 'Mission Bay Inn', 'Civic Grand', 'SoMa Lofts']) {
      expect(screen.getByText(hotel)).toBeInTheDocument()
    }
  })
})

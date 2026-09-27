import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Agents } from './Agents'

describe('Agents', () => {
  it('renders the section heading', () => {
    render(<Agents />)
    expect(screen.getByText('We Are To Help You')).toBeInTheDocument()
    expect(screen.getByText('Our Agents')).toBeInTheDocument()
  })

  it('renders all four agent cards', () => {
    render(<Agents />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Mike Davis')).toBeInTheDocument()
    expect(screen.getByText('Emily Brown')).toBeInTheDocument()
  })

  it('renders agent roles', () => {
    render(<Agents />)
    expect(screen.getByText('Senior Agent')).toBeInTheDocument()
    expect(screen.getByText('Property Specialist')).toBeInTheDocument()
    expect(screen.getByText('Luxury Homes Expert')).toBeInTheDocument()
    expect(screen.getByText('Residential Agent')).toBeInTheDocument()
  })

  it('renders social media links for each agent', () => {
    render(<Agents />)
    const facebookLinks = screen.getAllByRole('link', { name: /facebook/i })
    const twitterLinks = screen.getAllByRole('link', { name: /twitter/i })
    const instagramLinks = screen.getAllByRole('link', { name: /instagram/i })
    expect(facebookLinks.length).toBe(4)
    expect(twitterLinks.length).toBe(4)
    expect(instagramLinks.length).toBe(4)
  })
})

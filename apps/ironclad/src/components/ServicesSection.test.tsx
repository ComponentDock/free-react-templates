import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesSection } from './ServicesSection'

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    render(<ServicesSection />)
    expect(screen.getByText('We Offer Services')).toBeInTheDocument()
  })

  it('renders 3 service cards', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('Renovation')).toBeInTheDocument()
    expect(screen.getByText('Construction')).toBeInTheDocument()
  })

  it('renders Read more links', () => {
    render(<ServicesSection />)
    const links = screen.getAllByText(/read more/i)
    expect(links.length).toBe(3)
  })

  it('renders service descriptions', () => {
    render(<ServicesSection />)
    const descriptions = screen.getAllByText(/far from the countries Vokalia/i)
    expect(descriptions.length).toBe(3)
  })
})

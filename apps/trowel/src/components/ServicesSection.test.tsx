import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesSection } from './ServicesSection'

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { name: 'Best Services For You' })).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { name: 'General Contracting' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Architecture Design' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Material Supply' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Building Construction' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<ServicesSection />)
    const descriptions = screen.getAllByText(/Far far away/)
    expect(descriptions.length).toBeGreaterThanOrEqual(4)
  })
})

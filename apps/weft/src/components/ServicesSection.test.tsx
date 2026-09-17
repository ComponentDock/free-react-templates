import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ServicesSection } from './ServicesSection'

describe('ServicesSection', () => {
  it('renders the services heading', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Services')
  })

  it('renders all four service items', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Brand Design')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Creative Strategy')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<ServicesSection />)
    expect(screen.getByText(/Complete brand identity systems/)).toBeInTheDocument()
    expect(screen.getByText(/Custom website solutions/)).toBeInTheDocument()
  })
})

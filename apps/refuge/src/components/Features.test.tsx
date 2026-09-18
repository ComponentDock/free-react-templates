import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders section heading', () => {
    render(<Features />)
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
    expect(screen.getByText('Outstanding Services')).toBeInTheDocument()
  })

  it('renders four feature cards', () => {
    render(<Features />)
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
    expect(screen.getByText('Trusted People')).toBeInTheDocument()
    expect(screen.getByText('12 Years Experience')).toBeInTheDocument()
    expect(screen.getByText('Join With Us')).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/available around the clock/)).toBeInTheDocument()
    expect(screen.getByText(/Licensed professionals/)).toBeInTheDocument()
    expect(screen.getByText(/Over a decade/)).toBeInTheDocument()
    expect(screen.getByText(/Become part of a community/)).toBeInTheDocument()
  })
})

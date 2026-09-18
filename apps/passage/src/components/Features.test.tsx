import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByText('Our Features')).toBeInTheDocument()
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument()
  })

  it('renders all six feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Trusted & Verified')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
    expect(screen.getByText('High Success Rate')).toBeInTheDocument()
    expect(screen.getByText('Worldwide Coverage')).toBeInTheDocument()
    expect(screen.getByText('Documentation Help')).toBeInTheDocument()
    expect(screen.getByText('Expert Team')).toBeInTheDocument()
  })

  it('renders descriptions for each feature', () => {
    render(<Features />)
    expect(screen.getByText(/Licensed immigration consultants/)).toBeInTheDocument()
    expect(screen.getByText(/Round-the-clock assistance/)).toBeInTheDocument()
    expect(screen.getByText(/Over 95% of our applications/)).toBeInTheDocument()
    expect(screen.getByText(/immigration to 50\+ countries/)).toBeInTheDocument()
    expect(screen.getByText(/assistance with preparing/)).toBeInTheDocument()
    expect(screen.getByText(/experienced professionals/)).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Expertise } from './Expertise'

describe('Expertise', () => {
  it('renders the Expertise section', () => {
    render(<Expertise />)
    expect(screen.getByTestId('expertise')).toBeInTheDocument()
  })

  it('displays the My Expertise heading', () => {
    render(<Expertise />)
    expect(screen.getByRole('heading', { level: 2, name: 'My Expertise' })).toBeInTheDocument()
  })

  it('displays 3 service cards', () => {
    render(<Expertise />)
    expect(screen.getByText('Experience Design')).toBeInTheDocument()
    expect(screen.getByText('Interaction Design')).toBeInTheDocument()
    expect(screen.getByText('Front-end Design')).toBeInTheDocument()
  })

  it('displays service descriptions', () => {
    render(<Expertise />)
    expect(screen.getByText(/end-to-end user journeys/)).toBeInTheDocument()
    expect(screen.getByText(/micro-interactions/)).toBeInTheDocument()
    expect(screen.getByText(/pixel-perfect/)).toBeInTheDocument()
  })

  it('has cream background', () => {
    render(<Expertise />)
    const section = screen.getByTestId('expertise')
    expect(section.className).toContain('bg-cream')
  })
})

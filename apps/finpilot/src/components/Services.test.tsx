import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Services from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Explore Our Solutions')).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Invoicing')).toBeInTheDocument()
    expect(screen.getByText('Business Growth')).toBeInTheDocument()
    expect(screen.getByText('Problem Solving')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/We help you create/)).toBeInTheDocument()
    expect(screen.getByText(/Accelerate your business/)).toBeInTheDocument()
    expect(screen.getByText(/We tackle complex/)).toBeInTheDocument()
  })
})

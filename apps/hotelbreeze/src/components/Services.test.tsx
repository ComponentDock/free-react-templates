import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the services heading', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders all three service cards', () => {
    render(<Services />)
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Free Wi-Fi')).toBeInTheDocument()
    expect(screen.getByText('Airport Transfer')).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)
    expect(screen.getByText(/fine dining/)).toBeInTheDocument()
    expect(screen.getByText(/connected with complimentary/)).toBeInTheDocument()
    expect(screen.getByText(/Complimentary airport shuttle/)).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Services className="custom-class" />)
    expect(screen.getByText('Services').closest('section')).toHaveClass('custom-class')
  })
})

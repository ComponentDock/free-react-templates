import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
  })

  it('renders all four testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Johnson')).toBeInTheDocument()
    expect(screen.getByText('Leah Tylor')).toBeInTheDocument()
    expect(screen.getByText('Mary Johnson')).toBeInTheDocument()
    expect(screen.getByText('Beatrice Schwarzenegger')).toBeInTheDocument()
  })
})

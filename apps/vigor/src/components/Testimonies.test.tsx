import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonies } from './Testimonies'

describe('Testimonies', () => {
  it('renders section heading', () => {
    render(<Testimonies />)
    expect(screen.getByText('Successful Stories')).toBeDefined()
  })

  it('renders testimonies subheading', () => {
    render(<Testimonies />)
    expect(screen.getByText('Testimonies')).toBeDefined()
  })

  it('renders all 3 testimonials', () => {
    render(<Testimonies />)
    expect(screen.getByText('Gabby Smith')).toBeDefined()
    expect(screen.getByText('John Doe')).toBeDefined()
    expect(screen.getByText('Jane Wilson')).toBeDefined()
  })

  it('renders testimonial roles', () => {
    render(<Testimonies />)
    expect(screen.getByText('Customer')).toBeDefined()
    expect(screen.getByText('Member')).toBeDefined()
    expect(screen.getByText('Trainer')).toBeDefined()
  })
})

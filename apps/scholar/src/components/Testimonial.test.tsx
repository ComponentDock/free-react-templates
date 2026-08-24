import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the heading, quote, name, and role', () => {
    render(<Testimonial />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Student says about us' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Scholar has completely transformed my career/)).toBeInTheDocument()

    expect(screen.getByText('Petey Cruiser')).toBeInTheDocument()
    expect(screen.getByText('Student at Scholar')).toBeInTheDocument()
    expect(screen.getByAltText('Petey Cruiser')).toBeInTheDocument()
  })
})

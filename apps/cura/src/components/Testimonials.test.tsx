import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and three patient quote cards', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Patients Say' }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('blockquote')).toHaveLength(3)
  })

  it('shows patient names, star ratings and treatment badges', () => {
    render(<Testimonials />)
    for (const name of ['Maria Gonzalez', 'James Whitfield', 'Priya Sharma']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
    expect(screen.getAllByLabelText('5 out of 5 stars')).toHaveLength(3)
    expect(screen.getByText('Cardiology Care')).toBeInTheDocument()
    expect(screen.getByText('Neurology Visit')).toBeInTheDocument()
    expect(screen.getByText('Pediatric Care')).toBeInTheDocument()
  })
})

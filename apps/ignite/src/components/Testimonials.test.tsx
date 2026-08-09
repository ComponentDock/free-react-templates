import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least two quote cards with name and grade', () => {
    render(<Testimonials />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/WHAT STUDENTS SAY/i)

    expect(screen.getByText(/Elevate isn't just a youth group/i)).toBeInTheDocument()
    expect(screen.getByText('Emma T.')).toBeInTheDocument()
    expect(screen.getByText('11th Grade')).toBeInTheDocument()
    expect(screen.getByText(/skeptical about church/i)).toBeInTheDocument()
    expect(screen.getByText('Jordan M.')).toBeInTheDocument()
    expect(screen.getByText('10th Grade')).toBeInTheDocument()
    expect(screen.getByText(/Small groups changed everything/i)).toBeInTheDocument()
    expect(screen.getByText('Chris L.')).toBeInTheDocument()
    expect(screen.getByText('12th Grade')).toBeInTheDocument()
  })
})

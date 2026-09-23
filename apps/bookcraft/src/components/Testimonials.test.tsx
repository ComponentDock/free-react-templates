import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimonials From Readers/i })).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jacob Spencer')).toBeInTheDocument()
    expect(screen.getByText('David Shaun')).toBeInTheDocument()
    expect(screen.getByText('Craig Smith')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/captivating read from start to finish/i)).toBeInTheDocument()
    expect(screen.getByText(/couldn't put this book down/i)).toBeInTheDocument()
    expect(screen.getByText(/beautifully written novel/i)).toBeInTheDocument()
  })
})

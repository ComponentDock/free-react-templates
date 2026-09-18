import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the Happy Customers heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
  })

  it('renders the quote mark', () => {
    render(<Testimonials />)
    expect(screen.getByText('\u201C')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders blockquotes', () => {
    render(<Testimonials />)
    const blockquotes = document.querySelectorAll('blockquote')
    expect(blockquotes.length).toBeGreaterThanOrEqual(1)
  })
})

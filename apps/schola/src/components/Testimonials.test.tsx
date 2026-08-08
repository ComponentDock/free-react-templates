import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Our Learners Say/ })).toBeInTheDocument()
  })

  it('shows at least three attributed quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText('David Park')).toBeInTheDocument()
    expect(screen.getByText('Sophie Williams')).toBeInTheDocument()
    expect(screen.getByText('Ahmed Hassan')).toBeInTheDocument()
    expect(screen.getByText('Rachel Kim')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer at Spotify')).toBeInTheDocument()
    expect(screen.getByText('Product Designer at Airbnb')).toBeInTheDocument()
  })
})

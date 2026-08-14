import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the subheading and heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()
  })

  it('renders five quote cards with photo, name and position', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('figure')).toHaveLength(5)
    expect(screen.getAllByText(/Far far away, behind the word mountains/)).toHaveLength(5)
    expect(screen.getAllByText('Roger Scott')).toHaveLength(5)
    expect(screen.getAllByText('Marketing Manager')).toHaveLength(5)
  })
})

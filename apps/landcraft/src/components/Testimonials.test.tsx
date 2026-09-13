import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Testimonials from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Our Clients Say')).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Brayden Shar')).toBeInTheDocument()
    expect(screen.getByText('Robert Kyle')).toBeInTheDocument()
    expect(screen.getByText('Maria Chen')).toBeInTheDocument()
  })

  it('renders client roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO, Greenfield Corp')).toBeInTheDocument()
    expect(screen.getByText('Director, Sunnyvale HOA')).toBeInTheDocument()
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our corporate campus/)).toBeInTheDocument()
  })

  it('renders client images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(3)
  })
})

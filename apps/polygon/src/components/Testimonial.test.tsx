import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the section heading', () => {
    render(<Testimonial />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('renders both testimonials', () => {
    render(<Testimonial />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
  })

  it('renders testimonial roles', () => {
    render(<Testimonial />)
    expect(screen.getByText('CEO, DesignWorks')).toBeInTheDocument()
    expect(screen.getByText('Director, Urban Living')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonial />)
    expect(screen.getByText(/transformed our vision/)).toBeInTheDocument()
    expect(screen.getByText(/absolute pleasure/)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonial />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(2)
    expect(avatars[0]).toHaveAttribute('alt', 'Sarah Mitchell')
    expect(avatars[1]).toHaveAttribute('alt', 'David Chen')
  })

  it('renders section description', () => {
    render(<Testimonial />)
    expect(screen.getByText(/What our clients say/)).toBeInTheDocument()
  })
})

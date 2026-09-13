import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Our Patient Says/i })).toBeInTheDocument()
  })

  it('renders the subheading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Read testimonials')).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jennifer Hammond')).toBeInTheDocument()
    expect(screen.getByText('Mark Anderson')).toBeInTheDocument()
    expect(screen.getByText('Laura Stevens')).toBeInTheDocument()
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Medvista provided exceptional care/i)).toBeInTheDocument()
  })

  it('renders testimonial photos', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    const testiImages = images.filter((img) =>
      (img as HTMLImageElement).src.includes('medvista-testi'),
    )
    expect(testiImages).toHaveLength(3)
  })

  it('has a parallax background image', () => {
    render(<Testimonials />)
    const section = screen.getByTestId('testimonials')
    expect(section.style.backgroundImage).toContain('medvista-cta')
  })
})

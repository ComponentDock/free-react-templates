import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and 3 testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: 'Testimonials' })).toBeInTheDocument()

    expect(screen.getByText('Carl Anderson')).toBeInTheDocument()
    expect(screen.getByText('Drew Wood')).toBeInTheDocument()
    expect(screen.getByText('Michelle Allison')).toBeInTheDocument()
  })

  it('renders author titles', () => {
    render(<Testimonials />)

    const titles = screen.getAllByText('Director at Google')
    expect(titles).toHaveLength(3)
  })

  it('has the correct section landmark', () => {
    render(<Testimonials />)

    expect(screen.getByRole('region', { name: 'Testimonials' })).toBeInTheDocument()
  })
})

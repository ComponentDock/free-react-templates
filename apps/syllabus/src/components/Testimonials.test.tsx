import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What our students say' }),
    ).toBeInTheDocument()
  })

  it('renders testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Jessica Brown')).toBeInTheDocument()
  })

  it('renders author titles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marketing Graduate')).toBeInTheDocument()
    expect(screen.getByText('Computer Science Student')).toBeInTheDocument()
  })

  it('renders testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/This platform has transformed my career/)).toBeInTheDocument()
    expect(screen.getByText(/I cannot recommend this enough/)).toBeInTheDocument()
  })

  it('renders author images', () => {
    render(<Testimonials />)
    const jamesImg = screen.getByRole('img', { name: 'James Wilson' })
    expect(jamesImg).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

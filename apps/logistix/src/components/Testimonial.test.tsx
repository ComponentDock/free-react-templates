import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the Client Testimonial label', () => {
    render(<Testimonial />)
    expect(screen.getByText('Client Testimonial')).toBeInTheDocument()
  })

  it('renders the testimonial quote', () => {
    render(<Testimonial />)
    expect(screen.getByText(/Aenean eget consectetur ante/)).toBeInTheDocument()
  })

  it('renders the founder name and role', () => {
    render(<Testimonial />)
    expect(screen.getByText('Graham Cracker')).toBeInTheDocument()
    expect(screen.getByText('Logistics Manager')).toBeInTheDocument()
  })

  it('renders the founder image', () => {
    render(<Testimonial />)
    const img = screen.getByRole('img', { name: 'Graham Cracker' })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })

  it('renders the video play button', () => {
    render(<Testimonial />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})

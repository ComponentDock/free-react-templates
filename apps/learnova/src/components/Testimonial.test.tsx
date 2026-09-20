import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the testimonial quote', () => {
    render(<Testimonial />)
    expect(screen.getByText(/I highly recommend/)).toBeInTheDocument()
  })

  it('renders the person name', () => {
    render(<Testimonial />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('renders the person title', () => {
    render(<Testimonial />)
    expect(screen.getByText('Web Developer')).toBeInTheDocument()
  })

  it('has a blockquote element', () => {
    render(<Testimonial />)
    expect(screen.getByRole('blockquote')).toBeInTheDocument()
  })

  it('has a section landmark', () => {
    render(<Testimonial />)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })

  it('renders the person image', () => {
    render(<Testimonial />)
    const img = screen.getByRole('img', { name: /Sarah Johnson/ })
    expect(img).toBeInTheDocument()
  })
})

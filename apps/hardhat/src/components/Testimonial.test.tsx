import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the heading, quote text, and author', () => {
    render(<Testimonial />)

    expect(screen.getByRole('heading', { name: 'Testimonial' })).toBeInTheDocument()
    expect(screen.getByText(/Heaven fruitful/)).toBeInTheDocument()
    expect(screen.getByText('Jessya Inn')).toBeInTheDocument()
    expect(screen.getByText('Co Founder')).toBeInTheDocument()
  })
})

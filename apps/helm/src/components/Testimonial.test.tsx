import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the testimonial quote', () => {
    render(<Testimonial />)

    expect(screen.getByText(/Ducimus totam sit delectus earum/)).toBeInTheDocument()
  })

  it('renders the attribution', () => {
    render(<Testimonial />)

    expect(screen.getByText('Mike Dorney')).toBeInTheDocument()
    expect(screen.getByText(/CEO and Co-Founder/)).toBeInTheDocument()
  })

  it('renders a quote icon', () => {
    render(<Testimonial />)

    const blockquote = screen.getByRole('blockquote')
    expect(blockquote).toBeInTheDocument()
  })
})

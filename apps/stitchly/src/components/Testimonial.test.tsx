import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('displays the quote and author', () => {
    render(<Testimonial />)
    expect(screen.getByText(/Stitchly delivered a bespoke suit/i)).toBeInTheDocument()
    expect(screen.getByText('Robert Brown')).toBeInTheDocument()
    expect(screen.getByText('Satisfied Client')).toBeInTheDocument()
  })
})

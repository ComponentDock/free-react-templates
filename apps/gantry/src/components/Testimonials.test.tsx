import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and two testimonial blocks with client names', () => {
    render(<Testimonials />)

    const section = screen.getByRole('region', { name: 'Testimonial' })
    expect(within(section).getByRole('heading', { name: 'What People Says' })).toBeInTheDocument()

    const quotes = within(section).getAllByRole('blockquote')
    expect(quotes).toHaveLength(2)
    expect(within(section).getByText('Matt Keygen')).toBeInTheDocument()
    expect(within(section).getByText('Elena Woods')).toBeInTheDocument()
    expect(section.querySelectorAll('img')).toHaveLength(2)
  })
})

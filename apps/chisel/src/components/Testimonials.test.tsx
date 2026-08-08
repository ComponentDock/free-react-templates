import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders a quote and the author name', () => {
    render(<Testimonials />)
    const figure = screen.getByRole('figure')
    expect(within(figure).getByText(/Separated they live in/)).toBeInTheDocument()
    expect(within(figure).getByText('James Anderson')).toBeInTheDocument()
  })
})

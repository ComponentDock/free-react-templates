import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { WhyChooseUs } from './WhyChooseUs'

describe('WhyChooseUs', () => {
  it('renders the heading and both feature cards', () => {
    render(<WhyChooseUs />)
    expect(
      screen.getByRole('heading', {
        name: /Why Choose Us for Your Next Project\?/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Creative Ideas' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Better Strategy' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<WhyChooseUs />)
    expect(screen.getByText(/fresh, innovative concepts/i)).toBeInTheDocument()
    expect(screen.getByText(/data-driven approach/i)).toBeInTheDocument()
  })
})

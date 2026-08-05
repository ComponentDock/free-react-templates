import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, supporting paragraph, and two customer quotes', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Amazing customer review' }),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/In the old days, your website was the same for everyone/),
    ).toBeInTheDocument()

    expect(
      screen.getByText(/Appli helped us personalize every step of the journey/),
    ).toBeInTheDocument()
    expect(screen.getByText('Robert Brown')).toBeInTheDocument()
    expect(screen.getByText('Creative designer')).toBeInTheDocument()

    expect(
      screen.getByText(/The gradient landing page gave our launch a premium feel/),
    ).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Product lead')).toBeInTheDocument()
  })
})

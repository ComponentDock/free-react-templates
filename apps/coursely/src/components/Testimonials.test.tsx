import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and three quotes with authors', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Students Say' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/I switched careers from retail/)).toBeInTheDocument()
    expect(screen.getByText(/The data science courses are the clearest/)).toBeInTheDocument()
    expect(screen.getByText(/Coursely gave me a portfolio/)).toBeInTheDocument()

    for (const name of ['Alex Thompson', 'Sofia Martinez', 'James Wright']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }

    expect(screen.getByText('Software Engineer at Stripe')).toBeInTheDocument()
    expect(screen.getByText('Data Scientist at Meta')).toBeInTheDocument()
    expect(screen.getByText('Product Designer at Figma')).toBeInTheDocument()
  })
})

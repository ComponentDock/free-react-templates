import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Cta } from './Cta'

describe('Cta', () => {
  it('renders the heading, blurb, and both CTA buttons', () => {
    render(<Cta />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ready to Transform Your Space?' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/Book a complimentary consultation/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book a Consultation' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Portfolio' })).toBeInTheDocument()
  })
})

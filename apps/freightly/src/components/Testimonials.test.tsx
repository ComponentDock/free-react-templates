import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, three quotes and the certifications row', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Trusted by Industry Leaders' })).toBeInTheDocument()
    for (const author of ['Michael Chen', 'Sarah Martinez', 'David Okonkwo']) {
      expect(screen.getByText(author)).toBeInTheDocument()
    }
    for (const certification of ['ISO 9001 Certified', 'IATA Member', 'C-TPAT', 'WCA Member']) {
      expect(screen.getByText(certification)).toBeInTheDocument()
    }
  })
})

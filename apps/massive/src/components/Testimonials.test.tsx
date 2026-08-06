import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least one client quote', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: "What's say our Clients" })).toBeInTheDocument()

    expect(screen.getAllByRole('blockquote').length).toBeGreaterThanOrEqual(1)
  })
})

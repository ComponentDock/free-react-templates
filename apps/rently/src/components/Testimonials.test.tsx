import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least one quote', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Happy Clients/i })).toBeInTheDocument()
    expect(screen.getAllByText(/Roger Scott/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Far far away, behind the word mountains/i).length).toBeGreaterThan(
      0,
    )
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading and at least three quotes', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Members Say' }),
    ).toBeInTheDocument()

    for (const member of ['Maya Chen', 'Diego Alvarez', 'Sarah Kim']) {
      expect(screen.getByText(member)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('img', { name: '5 out of 5 stars' })).toHaveLength(3)
    expect(screen.getByText(/changed how our startup works/i)).toBeInTheDocument()
    expect(screen.getByText(/bounced between coffee shops/i)).toBeInTheDocument()
    expect(screen.getByText(/not marketing fluff/i)).toBeInTheDocument()
  })
})

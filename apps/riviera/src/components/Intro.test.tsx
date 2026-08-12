import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the eyebrow and heading', () => {
    render(<Intro />)
    expect(screen.getByText('a memorable holliday')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/A great stay in a lovely hotel/)
  })

  it('renders the copy column with the reservation CTA', () => {
    render(<Intro />)
    expect(screen.getByRole('link', { name: 'Make a Reservation' })).toHaveAttribute(
      'href',
      '#reservation',
    )
  })
})

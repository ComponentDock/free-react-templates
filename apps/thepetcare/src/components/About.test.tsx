import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about heading, copy, image, and Learn More link', () => {
    render(<About />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/The Kind of Care Your Pets Deserve/)
    expect(screen.getByRole('img', { name: /owner and dog/i })).toBeInTheDocument()
    expect(screen.getByText(/far from the countries vokalia/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
  })
})

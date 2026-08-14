import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, paragraphs, link, and team photo', () => {
    render(<About />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/about the phoenix/i)
    expect(
      screen.getAllByText(/far far away|a small river named duden|even the all-powerful/i).length,
    ).toBe(3)
    expect(screen.getByRole('link', { name: /watch game/i })).toHaveAttribute('href', '#games')
    expect(screen.getByRole('img', { name: 'The Sluggers team in action' })).toBeInTheDocument()
  })
})

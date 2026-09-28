import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Welcome } from './Welcome'

describe('Welcome', () => {
  it('renders the heading, paragraphs, and Book a Table link', () => {
    render(<Welcome />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Welcome to/i)
    expect(heading.textContent).toMatch(/forkful/i)

    expect(screen.getByText(/far far away, behind the word mountains/i)).toBeInTheDocument()
    expect(screen.getByText(/a small river named duden/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /book a table/i })).toHaveAttribute('href', '#contact')
  })
})

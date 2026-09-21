import { render, screen } from '@testing-library/react'
import { ChefsQuotes } from './ChefsQuotes'
import { describe, it, expect } from 'vitest'

describe('ChefsQuotes', () => {
  it('renders the heading', () => {
    render(<ChefsQuotes />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain("Chef's")
    expect(heading.textContent).toContain('Quotes')
  })

  it('renders the quote text', () => {
    render(<ChefsQuotes />)
    expect(screen.getByText(/Cooking is like love/i)).toBeInTheDocument()
  })

  it('renders the chef attribution', () => {
    render(<ChefsQuotes />)
    expect(screen.getByText(/Marco Bellini, Head Chef/)).toBeInTheDocument()
  })

  it('renders the chef image', () => {
    render(<ChefsQuotes />)
    const img = screen.getByRole('img', { name: /Head chef/i })
    expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})

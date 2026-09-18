import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextSection } from './TextSection'

describe('TextSection', () => {
  it('renders "The Story" heading', () => {
    render(<TextSection />)
    expect(screen.getByRole('heading', { name: /the story/i })).toBeInTheDocument()
  })

  it('renders "Dreamers" heading', () => {
    render(<TextSection />)
    expect(screen.getByRole('heading', { name: /dreamers/i })).toBeInTheDocument()
  })

  it('renders descriptive text in both columns', () => {
    render(<TextSection />)
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByText(/duis aute/i)).toBeInTheDocument()
  })

  it('renders a "More…" link', () => {
    render(<TextSection />)
    expect(screen.getByRole('link', { name: /more/i })).toBeInTheDocument()
  })

  it('the More link turns red on hover', () => {
    render(<TextSection />)
    const moreLink = screen.getByRole('link', { name: /more/i })
    expect(moreLink).toHaveClass('hover:text-brand-dark')
  })
})

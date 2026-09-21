import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Turn Your Dream Into Reality')).toBeInTheDocument()
  })

  it('renders 4 portfolio items', () => {
    render(<Portfolio />)
    const items = screen.getAllByRole('img', { name: /portfolio/i })
    expect(items.length).toBe(4)
  })

  it('has hover overlay elements', () => {
    render(<Portfolio />)
    const items = document.querySelectorAll('[data-testid="portfolio-item"]')
    expect(items.length).toBe(4)
  })
})

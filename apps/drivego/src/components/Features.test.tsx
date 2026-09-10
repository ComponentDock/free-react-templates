import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading and six service cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: /Features/i })).toBeInTheDocument()

    const headings = screen.getAllByRole('heading', { name: 'Lorem ipsum dolor' })
    expect(headings).toHaveLength(6)
  })

  it('renders six Learn more links', () => {
    render(<Features />)
    const links = screen.getAllByRole('link', { name: 'Learn more' })
    expect(links).toHaveLength(6)
    for (const link of links) {
      expect(link).toHaveAttribute('href', '#about')
    }
  })

  it('renders icon circles for each feature', () => {
    render(<Features />)
    const circles = document.querySelectorAll('[class*="rounded-full"][class*="bg-brand"]')
    expect(circles.length).toBeGreaterThanOrEqual(6)
  })
})

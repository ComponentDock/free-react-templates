import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the bold Oops heading and 404 label', () => {
    render(<ErrorSection />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('Oops!')

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      "404 - The Page can't be found",
    )
  })

  it('renders the Go to homepage link styled as the brand CTA', () => {
    render(<ErrorSection />)

    const homeLink = screen.getByRole('link', { name: 'Go to homepage' })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveClass('bg-brand')
    expect(homeLink).toHaveClass('uppercase')
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the gradient 404 heading', () => {
    render(<ErrorSection />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('404')
    expect(heading).toHaveClass('bg-linear-[130deg]')
    expect(heading).toHaveClass('bg-clip-text')
    expect(heading).toHaveClass('text-transparent')
  })

  it('renders the subheading, message, and return-to-homepage link', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(
      /oops! nothing was found/i,
    )
    expect(screen.getByText(/might have been removed/i)).toBeInTheDocument()

    const homeLink = screen.getByRole('link', { name: 'Return to homepage' })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveClass('text-brand')
  })

  it('renders the social icon links with accessible names', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com',
    )
    expect(screen.getByRole('link', { name: 'X (Twitter)' })).toHaveAttribute(
      'href',
      'https://x.com',
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })
})

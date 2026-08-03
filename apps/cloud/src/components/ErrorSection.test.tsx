import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the cloud illustration with an accessible label', () => {
    render(<ErrorSection />)

    const illustration = screen.getByRole('img', { name: /cloud/i })
    expect(illustration).toBeInTheDocument()
  })

  it('renders the 404 headline, page-not-found subheading, and explanatory message', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/404/)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toMatch(/Page not found/i)
    expect(
      screen.getByText(
        /the page you are looking for might have been removed had its name changed or is temporarily unavailable/i,
      ),
    ).toBeInTheDocument()
  })

  it('renders a Back to home button linking to the page root', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/')
  })

  it('renders social icon links with accessible names', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com',
    )
    expect(screen.getByRole('link', { name: /x \(twitter\)/i })).toHaveAttribute(
      'href',
      'https://x.com',
    )
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://linkedin.com',
    )
  })
})

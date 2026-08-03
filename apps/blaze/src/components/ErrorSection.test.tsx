import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the exclamation illustration with an accessible label', () => {
    render(<ErrorSection />)

    const illustration = screen.getByRole('img', { name: /exclamation mark/i })
    expect(illustration).toBeInTheDocument()
  })

  it('renders the 404 headline, message, and back-home link', () => {
    render(<ErrorSection />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Error\s*404/)

    expect(
      screen.getByText(
        /the page you are looking for might have been removed had its name changed or is temporarily unavailable/i,
      ),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Back to homepage' })).toHaveAttribute('href', '/')
  })
})

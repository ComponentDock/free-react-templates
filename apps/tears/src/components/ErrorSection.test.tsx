import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders a crying-emoji illustration with an accessible label', () => {
    render(<ErrorSection />)

    const emoji = screen.getByRole('img', { name: /crying emoji/i })
    expect(emoji).toBeInTheDocument()
  })

  it('renders the 404 heading, subheading, message, and back-home button', () => {
    render(<ErrorSection />)

    const code = screen.getByRole('heading', { level: 1 })
    expect(code.textContent).toMatch(/404/)

    const subheading = screen.getByRole('heading', { level: 2 })
    expect(subheading.textContent).toMatch(/Page not found/)

    expect(
      screen.getByText(/the page you are looking for might have been moved or no longer exists/i),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Back to home' })).toHaveAttribute('href', '/')
  })
})

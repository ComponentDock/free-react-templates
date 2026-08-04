import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the neon 404 display and Page not found label', () => {
    render(<ErrorSection />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toBe('404')
    expect(heading).toHaveClass('text-shadow-neon')

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Page not found')

    const section = heading.closest('section')
    expect(section).toHaveClass('bg-abyss')
  })

  it('renders the Go to homepage link styled as the outlined CTA', () => {
    render(<ErrorSection />)

    const homeLink = screen.getByRole('link', { name: 'Go to homepage' })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveClass('text-glow')
    expect(homeLink).toHaveClass('border-2')
  })
})

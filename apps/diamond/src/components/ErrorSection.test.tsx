import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the 404 display, label, and explanation paragraph', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('404')
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Page not found')
    expect(screen.getByText(/might have been removed/i)).toBeInTheDocument()
  })

  it('renders the rotated amber diamond badge with an accessible label', () => {
    render(<ErrorSection />)

    const badge = screen.getByRole('img', { name: 'Amber diamond badge' })
    expect(badge).toHaveClass('rotate-45')
    expect(badge).toHaveClass('bg-brand')
    expect(badge).toHaveClass('border-dashed')
  })

  it('renders the Go to homepage link styled as the gray pill CTA on a light section', () => {
    render(<ErrorSection />)

    const homeLink = screen.getByRole('link', { name: 'Go to homepage' })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveClass('bg-smoke')
    expect(homeLink).toHaveClass('rounded-full')

    const section = homeLink.closest('section')
    expect(section).toHaveClass('bg-white')
  })
})

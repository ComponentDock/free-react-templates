import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the neon-outline 404 display, description, and home page link', () => {
    render(<ErrorSection />)

    const display = screen.getByRole('heading', { level: 1 })
    expect(display.textContent).toBe('404')
    expect(display.style.textShadow).toContain('#c9c9c9')

    const zero = within(display).getByText('0')
    expect(zero.tagName).toBe('SPAN')
    expect(zero.style.textShadow).toContain('#ffab00')
    expect(zero.style.textShadow).toContain('#ff8700')

    expect(screen.getByText(/might have been removed/i)).toBeInTheDocument()

    const homeLink = screen.getByRole('link', { name: 'home page' })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveClass('border-2', 'text-mist')
    expect(homeLink).toHaveClass('hover:text-brand')
  })
})

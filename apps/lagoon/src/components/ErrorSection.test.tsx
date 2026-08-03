import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders the teal sad-face emoticon in the brand color', () => {
    render(<ErrorSection />)

    const emoticon = screen.getByRole('img', { name: /sad face/i })
    expect(emoticon).toBeInTheDocument()
    expect(emoticon.textContent).toContain(':(')
    expect(emoticon).toHaveClass('text-brand')
  })

  it('renders the 404 heading, explanatory paragraph, and home page link', () => {
    render(<ErrorSection />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/404 - page not found/i)
    expect(screen.getByText(/might have been removed/i)).toBeInTheDocument()

    const homeLink = screen.getByRole('link', { name: 'Home page' })
    expect(homeLink).toHaveAttribute('href', '/')
    expect(homeLink).toHaveClass('hover:bg-brand')
  })
})

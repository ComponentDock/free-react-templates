import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorSection } from './ErrorSection'

describe('ErrorSection', () => {
  it('renders a giant light-gray 404 watermark behind the content', () => {
    render(<ErrorSection />)

    const watermark = screen.getByText('404')
    expect(watermark).toHaveAttribute('aria-hidden', 'true')
    expect(watermark.className).toContain('text-[#ececec]')
    expect(watermark.className).toContain('absolute')
  })

  it('renders the sorry heading as the level-1 heading', () => {
    render(<ErrorSection />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/we are sorry, page not found/i)
    expect(heading.className).toContain('uppercase')
  })

  it('renders the explanatory message', () => {
    render(<ErrorSection />)

    expect(screen.getByText(/might have been removed/i)).toBeInTheDocument()
    expect(screen.getByText(/temporarily unavailable/i)).toBeInTheDocument()
  })

  it('renders a Back To Homepage pill link pointing to the page root', () => {
    render(<ErrorSection />)

    const link = screen.getByRole('link', { name: 'Back To Homepage' })
    expect(link).toHaveAttribute('href', '/')
    expect(link.className).toContain('rounded-full')
    expect(link.className).toContain('bg-brand')
  })
})

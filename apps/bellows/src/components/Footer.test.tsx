import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Footer } from './Footer'

afterEach(() => {
  vi.useRealTimers()
})

describe('Footer', () => {
  it('renders a footer element with the current year', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-15T12:00:00'))
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toBeInTheDocument()
    expect(container.querySelector('footer')?.textContent).toContain('2026')
  })

  it('links "More templates at Component Dock" to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders unobtrusively muted so the minimal design survives', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('p')?.className).toContain('text-[#6c757d]')
  })
})

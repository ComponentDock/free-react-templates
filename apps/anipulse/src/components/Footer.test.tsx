import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { BRAND, NAV_LINKS } from '../data'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText(BRAND)).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    for (const link of NAV_LINKS) {
      expect(screen.getByText(link.label)).toBeInTheDocument()
    }
  })

  it('renders the Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright line with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })

  it('renders scroll to top button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: /scroll to top/i })).toBeInTheDocument()
  })

  it('scrolls to top on button click', async () => {
    const user = userEvent.setup()
    const scrollSpy = vi.spyOn(window, 'scrollTo')
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: /scroll to top/i }))
    expect(scrollSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    scrollSpy.mockRestore()
  })
})

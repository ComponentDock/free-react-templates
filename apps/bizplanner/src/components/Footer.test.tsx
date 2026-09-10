import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('BizPlanner')).toBeDefined()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year} BizPlanner`))).toBeDefined()
    expect(screen.getByText(/All Rights Reserved/)).toBeDefined()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeDefined()
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media icons', () => {
    const { container } = render(<Footer />)
    const socialLinks = container.querySelectorAll('footer a[aria-label]')
    expect(socialLinks.length).toBe(5)
  })

  it('has no ColorLib references', () => {
    const { container } = render(<Footer />)
    const html = container.innerHTML
    expect(html.toLowerCase()).not.toContain('colorlib')
  })
})

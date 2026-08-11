import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

describe('Navbar', () => {
  it('renders the brand "Succor." with the dot in the brand color', () => {
    const { container } = render(<Navbar />)

    const brand = screen.getByText('Succor')
    expect(brand.className).toMatch(/font-black/)
    const dot = container.querySelector('a span.text-brand') as HTMLElement
    expect(dot).not.toBeNull()
    expect(dot.textContent).toBe('.')
  })

  it('renders all five desktop nav links with white w700 text and brand hover', () => {
    render(<Navbar />)

    for (const link of NAV_LINKS) {
      const anchor = screen.getAllByText(link.label)[0] as HTMLAnchorElement
      expect(anchor).toHaveAttribute('href', link.href)
      expect(anchor.className).toMatch(/text-white/)
      expect(anchor.className).toMatch(/font-bold/)
      expect(anchor.className).toMatch(/hover:text-brand/)
    }
  })

  it('marks the Home link as the active page', () => {
    render(<Navbar />)

    const home = screen.getAllByText('Home')[0] as HTMLAnchorElement
    expect(home).toHaveAttribute('aria-current', 'page')
    const causes = screen.getAllByText('Causes')[0] as HTMLAnchorElement
    expect(causes).not.toHaveAttribute('aria-current')
  })

  it('shows a hamburger toggle with aria-expanded that expands and collapses the mobile menu', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByText('Who we are')).toBeInTheDocument() // desktop links always present

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a link is activated', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // All five links exist in the mobile panel after opening.
    const mobileLink = screen.getAllByText('Causes')[1] as HTMLAnchorElement
    expect(mobileLink).not.toBeUndefined()
    fireEvent.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})

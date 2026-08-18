import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { FOOTER_BLURB, FOOTER_LINKS, FOOTER_YEAR } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, blurb and footer navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Juris home' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_BLURB)).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Footer navigation' })
    const anchors: Record<string, string> = {
      Home: '#home',
      'Practice Area': '#practice',
      About: '#about',
      Blog: '#blog',
      Contact: '#contact',
    }
    for (const label of FOOTER_LINKS) {
      expect(nav.querySelector(`a[href="${anchors[label]}"]`)).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with the Component Dock link', () => {
    render(<Footer />)
    expect(
      screen.getByText(`Copyright © ${FOOTER_YEAR} Juris. All rights reserved`),
    ).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('target', '_blank')
  })

  it('scrolls to the top when the back-to-top button is clicked', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    render(<Footer />)
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
    vi.unstubAllGlobals()
  })
})

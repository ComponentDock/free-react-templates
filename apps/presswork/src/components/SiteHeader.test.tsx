import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { SiteHeader } from './SiteHeader'
import { BRAND, NAV_LINKS, WORDMARK_HREF } from '../data/site'

describe('SiteHeader', () => {
  it('renders the wordmark as a serif home link with a decorative registered mark', () => {
    const { container } = render(<SiteHeader />)
    const logo = screen.getByRole('link', { name: BRAND })

    expect(logo).toHaveAttribute('href', WORDMARK_HREF)
    expect(logo).toHaveClass('pw-logo')
    expect(container.querySelector('.pw-logo-mark')).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('.pw-logo-mark')).toHaveTextContent('®')
  })

  it('renders four nav links in order, all with real in-page destinations', () => {
    render(<SiteHeader />)
    const nav = screen.getByRole('navigation', { name: 'Main' })
    const links = within(nav).getAllByRole('link')

    expect(links).toHaveLength(4)
    expect(links.map((link) => link.textContent)).toEqual(['Work', 'Studio', 'Journal', 'Contact'])
    for (const link of links) {
      expect(link.getAttribute('href')).not.toBe('#')
      expect(link.getAttribute('href')).toBeTruthy()
    }
    expect(NAV_LINKS).toHaveLength(4)
  })

  it('marks exactly one link as the current page', () => {
    render(<SiteHeader />)
    const current = document.querySelectorAll('[aria-current="page"]')

    expect(current).toHaveLength(1)
    expect(current[0]).toHaveTextContent('Work')
  })

  it('sets the closing link in the rust accent', () => {
    render(<SiteHeader />)

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveClass('pw-link', 'pw-link--contact')
    expect(screen.getByRole('link', { name: 'Studio' })).toHaveClass('pw-link')
    expect(screen.getByRole('link', { name: 'Studio' })).not.toHaveClass('pw-link--contact')
  })
})

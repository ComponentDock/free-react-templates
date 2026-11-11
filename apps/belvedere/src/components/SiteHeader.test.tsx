import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BRAND, NAV_LINKS, TOP_ID, WORDMARK_HREF } from '../data/site'
import { SiteHeader } from './SiteHeader'

describe('SiteHeader', () => {
  it('renders the monogram wordmark as the home link', () => {
    render(<SiteHeader />)

    const logo = screen.getByRole('link', { name: new RegExp(BRAND.name, 'i') })
    expect(logo).toHaveAttribute('href', WORDMARK_HREF)
    expect(logo).toHaveTextContent(`${BRAND.mark}${BRAND.name}`)

    const monogram = logo.querySelector('span')
    expect(monogram).toHaveTextContent(BRAND.mark)
    expect(monogram).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders three nav pills in one labelled navigation landmark', () => {
    render(<SiteHeader />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const links = screen.getAllByRole('link')

    expect(nav).toBeInTheDocument()
    expect(links).toHaveLength(1 + NAV_LINKS.length)

    for (const link of NAV_LINKS) {
      const pill = screen.getByRole('link', { name: link.label })
      expect(nav).toContainElement(pill)
      expect(pill).toHaveAttribute('href', link.href)
    }
  })

  it('marks exactly one link as the current page', () => {
    render(<SiteHeader />)

    const current = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('aria-current') === 'page')

    expect(current).toHaveLength(1)
    expect(current[0]).toHaveTextContent('Work')
  })

  it('leaves no dead anchor behind', () => {
    const { container } = render(<SiteHeader />)

    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)
    expect(container.querySelector(`a[href="#${TOP_ID}"]`)).not.toBeNull()
  })
})

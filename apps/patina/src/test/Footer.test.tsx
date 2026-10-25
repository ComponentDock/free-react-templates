import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'
import { footer, site } from '../content'

describe('Footer', () => {
  it('is a four-zone plate with a brand column, three link columns and a licence column', () => {
    render(<Footer />)

    expect(screen.getByText(footer.blurb)).toHaveClass('text-gray-400', 'max-w-xs')
    footer.columns.forEach((column) => {
      expect(screen.getByRole('heading', { level: 3, name: column.heading })).toHaveClass(
        'uppercase',
        'text-white',
      )
      column.links.forEach((link) => {
        expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
      })
    })

    expect(screen.getByRole('heading', { level: 3, name: 'Licensed' })).toBeInTheDocument()
    expect(screen.getByText(footer.licenceLine)).toBeInTheDocument()
  })

  it('publishes a well-formed phone, a real mailto and no bare hashes', () => {
    const { container } = render(<Footer />)

    const phoneLinks = Array.from(container.querySelectorAll('a[href^="tel:"]'))
    expect(phoneLinks.length).toBeGreaterThan(0)
    phoneLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe(site.phoneHref)
      expect(site.phoneHref).toBe('tel:+15550100244')
    })

    const mail = container.querySelector('a[href^="mailto:"]') as HTMLAnchorElement
    expect(mail.getAttribute('href')).toBe(`mailto:${site.email}`)

    expect(Array.from(container.querySelectorAll('a[href="#"]'))).toHaveLength(0)
  })

  it('carries the brass phone pill and the Component Dock attribution', () => {
    render(<Footer />)

    const pill = screen.getAllByRole('link', { name: site.phone }).at(-1) as HTMLElement
    expect(pill).toHaveClass('rounded-full', 'bg-primary-600', 'px-5', 'py-3')

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      site.componentDock,
    )
    expect(screen.getByRole('link', { name: footer.attribution })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('closes with the copyright and the two legal links', () => {
    render(<Footer />)

    expect(screen.getByText(footer.copyright)).toHaveClass('text-gray-500')
    footer.legal.forEach((item) => {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    })
  })
})

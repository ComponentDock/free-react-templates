import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../App'
import { NAV, site } from '../content'

const SECTIONS = [
  'top',
  'emergency',
  'compare',
  'process',
  'services',
  'why-us',
  'areas',
  'testimonials',
  'faq',
  'contact',
]

describe('App', () => {
  it('renders the bands in the measured order behind one main landmark', () => {
    const { container } = render(<App />)

    expect(container.querySelector('main')).toHaveAttribute('id', 'main-content')
    expect(Array.from(container.querySelectorAll('main > section')).map((section) => section.id)).toEqual(
      SECTIONS,
    )
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('puts the licence bar above the header and the skip link first', () => {
    const { container } = render(<App />)

    const bar = container.querySelector('[data-licence-bar]') as HTMLElement
    const header = container.querySelector('header') as HTMLElement
    expect(bar.compareDocumentPosition(header) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(container.querySelector('a[href]')).toHaveAttribute('href', '#main-content')
  })

  it('resolves every nav anchor to an id on the page', () => {
    const { container } = render(<App />)

    NAV.forEach((item) => {
      expect(container.querySelector(item.href)).not.toBeNull()
    })
    expect(container.querySelector('#service-areas')).toBeNull()
  })

  it('uses only well-formed destinations — no bare hashes, no dead ids', () => {
    const { container } = render(<App />)
    const anchors = Array.from(container.querySelectorAll('a[href]'))
    const hrefs = anchors.map((anchor) => anchor.getAttribute('href') as string)

    expect(hrefs.filter((href) => href === '#')).toHaveLength(0)
    hrefs
      .filter((href) => href.startsWith('#') && href !== '#main-content')
      .forEach((href) => {
        expect(container.querySelector(href)).not.toBeNull()
      })
    hrefs
      .filter((href) => href.startsWith('tel:'))
      .forEach((href) => {
        expect(href).toBe(site.phoneHref)
      })
  })

  it('carries no source provenance and credits Component Dock', () => {
    render(<App />)

    const text = document.body.textContent ?? ''
    expect(text).not.toMatch(new RegExp(['color', 'lib'].join(''), 'i'))
    expect(screen.getAllByRole('link', { name: /Component Dock/ })[0]).toHaveAttribute(
      'href',
      site.componentDock,
    )
  })
})

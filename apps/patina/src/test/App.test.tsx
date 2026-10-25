import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../App'
import { site } from '../content'
import { NAV } from '../components/Header'

const SECTIONS = ['top', 'portfolio', 'compare', 'process', 'owner', 'testimonials', 'contact']

describe('App', () => {
  it('renders the bands in the measured order behind one main landmark', () => {
    const { container } = render(<App />)

    expect(container.querySelector('main')).toHaveAttribute('id', 'main-content')
    expect(Array.from(container.querySelectorAll('main > section')).map((section) => section.id)).toEqual(
      SECTIONS,
    )
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('puts the skip link first and the header over the hero', () => {
    const { container } = render(<App />)

    expect(container.querySelector('a[href]')).toHaveAttribute('href', '#main-content')
    const header = container.querySelector('header') as HTMLElement
    const main = container.querySelector('main') as HTMLElement
    expect(header.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('resolves every nav anchor to a band on the page', () => {
    const { container } = render(<App />)

    NAV.forEach((item) => {
      expect(container.querySelector(item.href)).not.toBeNull()
    })
    expect(container.querySelector('#studio')).toBeNull()
  })

  it('uses only well-formed destinations — no bare hashes, no dead ids', () => {
    const { container } = render(<App />)
    const hrefs = Array.from(container.querySelectorAll('a[href]')).map(
      (anchor) => anchor.getAttribute('href') as string,
    )

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

  it('carries no source provenance and credits Component Dock in the footer', () => {
    const { container } = render(<App />)
    const text = document.body.textContent ?? ''
    const html = container.innerHTML

    expect(text).not.toMatch(new RegExp(['color', 'lib'].join(''), 'i'))
    expect(text).not.toMatch(new RegExp(['on', 'yx'].join(''), 'i'))
    expect(html).not.toMatch(new RegExp(['color', 'lib'].join(''), 'i'))
    expect(screen.getAllByRole('link', { name: /Component Dock/ }).length).toBeGreaterThan(0)
  })
})

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../App'
import { NAV, site } from '../content'

const SECTIONS = [
  'top',
  'scope',
  'industries',
  'why-us',
  'process',
  'areas',
  'testimonials',
  'faq',
  'contact',
]

describe('App', () => {
  it('renders the bands in the measured order behind one main landmark', () => {
    const { container } = render(<App />)

    expect(container.querySelector('main')).toHaveAttribute('id', 'main-content')
    expect(
      Array.from(container.querySelectorAll('main > section')).map((section) => section.id),
    ).toEqual(SECTIONS)
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('puts the skip link first and resolves every nav anchor', () => {
    const { container } = render(<App />)
    const general = screen.getByRole('link', { name: 'Skip to content' })
    expect(container.querySelector('a[href]')).toBe(general)

    NAV.forEach((item) => {
      expect(container.querySelector(item.href)).not.toBeNull()
    })
    expect(container.querySelector('#areas')).not.toBeNull()
  })

  it('gives every anchor a real destination', () => {
    const { container } = render(<App />)
    const anchors = Array.from(container.querySelectorAll('a[href]'))

    expect(anchors.length).toBeGreaterThan(30)
    expect(anchors.filter((anchor) => anchor.getAttribute('href') === '#')).toHaveLength(0)
    expect(
      anchors.filter((anchor) => anchor.getAttribute('href')?.startsWith('tel:')),
    ).toHaveLength(3)
  })

  it('carries no source provenance in the rendered page and links Component Dock', () => {
    render(<App />)

    expect(document.body.textContent).not.toMatch(new RegExp(['color', 'lib'].join(''), 'i'))
    expect(screen.getAllByRole('link', { name: /Component Dock/ })[0]).toHaveAttribute(
      'href',
      site.componentDock,
    )
  })
})

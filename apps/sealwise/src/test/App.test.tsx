import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../App'
import { contact, footer, hero } from '../content'

describe('Sealwise page', () => {
  it('renders the bands in the reference document order', () => {
    const { container } = render(<App />)
    const ids = Array.from(container.querySelectorAll('section[id]')).map((node) => node.id)
    expect(ids).toEqual([
      'identify',
      'emergency',
      'plans',
      'why-us',
      'process',
      'areas',
      'testimonials',
      'faq',
      'contact',
    ])
    expect(container.querySelector('[data-licence-bar]')).not.toBeNull()
    expect(container.querySelector('[data-header]')).not.toBeNull()
    expect(container.querySelector('footer')).not.toBeNull()
  })

  it('has one h1, one main landmark and a skip link that points at it', () => {
    const { container } = render(<App />)
    expect(container.querySelectorAll('h1')).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(hero.titleLead)
    expect(container.querySelector('main')?.id).toBe('main-content')
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute(
      'href',
      '#main-content',
    )
  })

  it('carries the Component Dock link in the footer', () => {
    render(<App />)
    const dock = screen.getByRole('link', { name: footer.dock })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('leaves no bare or dead anchor in the page', () => {
    const { container } = render(<App />)
    const anchors = Array.from(container.querySelectorAll('a[href^="#"]'))
    expect(anchors.length).toBeGreaterThan(0)
    for (const anchor of anchors) {
      const href = anchor.getAttribute('href') ?? ''
      expect(href).not.toBe('#')
      const target = href.slice(1)
      expect(
        target === 'main-content' || container.querySelector(`[id="${target}"]`) !== null,
      ).toBe(true)
    }
  })

  it('lifts the reference’s honesty mechanism into the closing bands', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: contact.title })).toBeInTheDocument()
    const footerBlock = screen.getByRole('contentinfo')
    expect(within(footerBlock).getByText(footer.copyright)).toBeInTheDocument()
  })
})

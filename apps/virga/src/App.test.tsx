import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HEADLINE, NAV_LINKS, STATS, TOP_ID } from './data/site'
import { App } from './App'

describe('App', () => {
  it('renders one shell, one hero screen and the branded footer', () => {
    const { container } = render(<App />)

    const shell = container.querySelector('.vg-shell')
    expect(shell).toHaveAttribute('id', TOP_ID)
    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelectorAll('footer')).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('puts the two decorative layers first and hides them from assistive tech', () => {
    const { container } = render(<App />)

    const shell = container.querySelector('.vg-shell')!
    const layers = Array.from(shell.children).slice(0, 2)

    expect(layers[0]).toHaveClass('vg-grid')
    expect(layers[1]).toHaveClass('vg-glow')
    for (const layer of layers) {
      expect(layer).toHaveAttribute('aria-hidden', 'true')
    }
  })

  it('keeps exactly one headline and labels the hero section with it', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(`${HEADLINE.lead} ${HEADLINE.tail}`)

    const section = screen.getByRole('region')
    expect(section).toHaveAttribute('aria-labelledby', headings[0]?.id)
  })

  it('carries the reference content counts', () => {
    const { container } = render(<App />)

    // One logo, one menu glyph (the open state swaps it) and one chevron.
    expect(container.querySelectorAll('svg')).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('form, input')).toHaveLength(0)
    expect(container.querySelectorAll('h2, h3')).toHaveLength(0)
    expect(container.querySelectorAll('button')).toHaveLength(1)
    expect(container.querySelectorAll('dl')).toHaveLength(1)
    expect(screen.getAllByRole('term')).toHaveLength(STATS.length)
    expect(container.querySelectorAll('code')).toHaveLength(1)
  })

  it('ships no dead anchors and every link resolves', () => {
    const { container } = render(<App />)

    const anchors = container.querySelectorAll('a')
    // wordmark + four nav links + sign in + deploy now + pill + CTA + footer.
    expect(anchors).toHaveLength(1 + NAV_LINKS.length + 2 + 1 + 1 + 1)
    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)

    for (const anchor of Array.from(anchors)) {
      const href = anchor.getAttribute('href')
      expect(href).toBeTruthy()
      expect(href).not.toBe('#')
    }
  })

  it('points its footer at the marketplace', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

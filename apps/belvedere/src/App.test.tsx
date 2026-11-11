import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { HEADLINE, NAV_LINKS, SOCIAL_LINKS, STATS } from './data/site'
import { App } from './App'

describe('App', () => {
  it('renders one hero screen and the branded footer', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('header')).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(container.querySelectorAll('footer')).toHaveLength(1)
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('keeps exactly one headline, and labels the section with it', () => {
    render(<App />)

    const headings = screen.getAllByRole('heading')
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveTextContent(
      `${HEADLINE.before}${HEADLINE.highlight}${HEADLINE.after}`,
    )

    const section = screen.getByRole('region')
    expect(section).toHaveAttribute('aria-labelledby', headings[0]?.id)
  })

  it('carries the reference element counts', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('h2, h3')).toHaveLength(0)
    expect(container.querySelectorAll('img')).toHaveLength(1)
    expect(container.querySelectorAll('form, input, button')).toHaveLength(0)
    expect(container.querySelectorAll('svg')).toHaveLength(6)
    expect(container.querySelectorAll('mark')).toHaveLength(1)
    expect(container.querySelectorAll('dl')).toHaveLength(1)
    expect(within(container.querySelector('dl') as HTMLElement).getAllByRole('term')).toHaveLength(
      STATS.length,
    )
    expect(container.querySelectorAll('script')).toHaveLength(0)
  })

  it('ships no dead anchors and every link resolves', () => {
    const { container } = render(<App />)

    const anchors = container.querySelectorAll('a')
    expect(anchors).toHaveLength(
      1 + NAV_LINKS.length + 2 + SOCIAL_LINKS.length + 1,
    )
    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)

    for (const anchor of Array.from(anchors)) {
      expect(anchor.getAttribute('href')).toBeTruthy()
    }
  })
})

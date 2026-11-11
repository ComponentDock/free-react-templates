import { render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { COMPONENT_DOCK_URL, FOOTER, TARGET } from './data/site'
import { App } from './App'

const AT_TARGET = Date.parse(TARGET)
const WEEK = 604_800_000

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(AT_TARGET - WEEK)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders one screen: the bar, one hero and one card', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('banner')).toHaveLength(1)
    expect(screen.getByRole('banner').tagName).toBe('HEADER')
    expect(screen.getAllByRole('navigation', { name: 'Main' })).toHaveLength(1)
    expect(container.querySelectorAll('main')).toHaveLength(1)
    expect(container.querySelectorAll('section')).toHaveLength(1)
    expect(screen.getAllByRole('complementary')).toHaveLength(1)
    expect(screen.getAllByRole('contentinfo')).toHaveLength(1)
  })

  it('keeps the reference counts', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1)
    expect(container.querySelectorAll('h3')).toHaveLength(0)
    expect(container.querySelectorAll('img')).toHaveLength(0)
    expect(container.querySelectorAll('form, input')).toHaveLength(0)

    // Eight anchors — the bar's six, the card's secondary link and the
    // marketplace line — and two buttons (the menu toggle and the CTA, which
    // became a button so it can open the seat step).
    expect(screen.getAllByRole('link')).toHaveLength(8)
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  it('resolves every in-page anchor to a real target', () => {
    const { container } = render(<App />)

    const inPage = Array.from(container.querySelectorAll('a[href^="#"]'))
    expect(inPage.length).toBeGreaterThan(0)

    for (const anchor of inPage) {
      const id = anchor.getAttribute('href')?.slice(1) ?? ''
      expect(container.ownerDocument.getElementById(id)).not.toBeNull()
    }
  })

  it('draws three clipped rings behind the content', () => {
    const { container } = render(<App />)

    const deco = container.querySelector('.sp-deco')
    expect(deco).toHaveAttribute('aria-hidden', 'true')
    expect(deco?.querySelectorAll('.sp-ring')).toHaveLength(3)
  })

  it('closes with the marketplace line', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(FOOTER.prefix)
    const link = screen.getByRole('link', { name: FOOTER.linkLabel })
    expect(link).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(footer).toContainElement(link)
  })
})

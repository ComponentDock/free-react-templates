import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK_URL, FOOTER, PHOTO, TITLE_ID } from './data/site'
import { App } from './App'

describe('App', () => {
  it('renders one screen: the bar, one hero, one card and one footer', () => {
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

    expect(container.querySelectorAll('img')).toHaveLength(1)
    expect(container.querySelector('img')).toHaveAttribute('src', PHOTO.src)
    expect(container.querySelector('img')).toHaveAttribute('alt', '')

    expect(container.querySelectorAll('form, input')).toHaveLength(0)
    expect(screen.getAllByRole('button')).toHaveLength(1)
    expect(container.querySelectorAll('svg')).toHaveLength(4)

    // Nine anchors: the reference's eight (four nav links, the wordmark, the
    // phone and the two actions) plus the Component Dock line the port adds.
    expect(screen.getAllByRole('link')).toHaveLength(9)
  })

  it('resolves every in-page anchor to a real target', () => {
    const { container } = render(<App />)

    const inPage = Array.from(container.querySelectorAll('a[href^="#"]'))
    expect(inPage).toHaveLength(7)

    for (const anchor of inPage) {
      const id = anchor.getAttribute('href')?.slice(1) ?? ''
      expect(container.ownerDocument.getElementById(id)).not.toBeNull()
    }
  })

  it('ships no dead href and a dialable phone number', () => {
    const { container } = render(<App />)

    expect(container.querySelectorAll('a[href="#"], a[href=""]')).toHaveLength(0)

    const phone = screen.getByRole('link', { name: /^0\d/ })
    expect(phone.getAttribute('href')).toMatch(/^tel:\+?\d+$/)
  })

  it('puts the headline at the top of the shell and the ecosystem line outside it', () => {
    const { container } = render(<App />)

    const shell = container.querySelector('.tt-shell')
    expect(shell).not.toBeNull()
    expect(shell?.querySelector('main')).not.toBeNull()
    expect(shell?.querySelector('footer')).toBeNull()
    expect(shell?.querySelector(`#${TITLE_ID}`)).not.toBeNull()

    const footer = screen.getByRole('contentinfo')
    expect(shell?.contains(footer)).toBe(false)
    expect(screen.getByRole('link', { name: FOOTER.linkLabel })).toHaveAttribute(
      'href',
      COMPONENT_DOCK_URL,
    )
  })
})

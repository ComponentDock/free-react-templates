import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the header, the single slate band and the shell footer', () => {
    const { container } = render(<App />)

    expect(document.title).toBe('Menutree — Multi-Level Menu Template')
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)

    const band = container.querySelector('[data-band]') as HTMLElement
    expect(band).toHaveClass('min-h-screen', 'bg-band')
    expect(screen.getByRole('main')).toContainElement(band)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('lands every menu row on a real in-band panel — no dead anchors', () => {
    const { container } = render(<App />)

    expect(Array.from(container.querySelectorAll('main section[id]')).map((el) => el.id)).toEqual([
      'home',
      'about',
      'team',
      'pricing',
      'faq',
      'gallery',
      'services',
      'testimonials',
      'blog',
      'contact',
    ])

    const hashes = Array.from(container.querySelectorAll('a[href^="#"]')).map(
      (link) => link.getAttribute('href') as string,
    )
    expect(hashes.length).toBeGreaterThan(10)
    for (const hash of hashes) {
      expect(document.getElementById(hash.slice(1))).not.toBeNull()
    }
  })

  it('labels every icon-only control and credits Component Dock exactly once', () => {
    const { container } = render(<App />)

    expect(screen.getAllByRole('link', { name: /opens in a new tab/ })).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Open the menu' })).toHaveAttribute(
      'aria-controls',
      'mobile-menu',
    )
    expect(
      Array.from(container.querySelectorAll('button[aria-controls^="mobile-"]')).length,
    ).toBeGreaterThan(0)
    expect(container.querySelector('#mobile-about')).toBeNull()
    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)
    expect(container.textContent).toContain(String(new Date().getFullYear()))
  })

  it('ships only seeded placeholder imagery and Tailwind utilities — no copied assets', () => {
    const { container } = render(<App />)

    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThan(0)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/^https:\/\/picsum\.photos\/seed\/menutree-/)
    }

    expect(
      Array.from(container.querySelectorAll('[class]')).every((el) => !/\bcl-/.test(el.className)),
    ).toBe(true)
    expect(document.head.innerHTML).not.toContain('.woff')
  })
})

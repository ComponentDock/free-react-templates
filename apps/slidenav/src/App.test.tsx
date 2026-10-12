import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes the header, the single coral band and the shell footer', () => {
    const { container } = render(<App />)

    expect(document.title).toBe('Slidenav — Sliding Navigation Template')
    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main')
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)

    const band = container.querySelector('[data-band]') as HTMLElement
    expect(band).toHaveClass('min-h-screen', 'bg-band')
    expect(screen.getByRole('main')).toContainElement(band)

    const header = container.querySelector('header') as HTMLElement
    expect(header).toHaveClass('absolute', 'bg-transparent')
    expect(header.className).not.toMatch(/sticky|fixed|border/)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })

  it('lands every menu row on a real in-band panel — no dead anchors', () => {
    const { container } = render(<App />)

    expect(Array.from(container.querySelectorAll('main section[id]')).map((el) => el.id)).toEqual([
      'home',
      'portfolio',
      'about',
      'services',
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

  it('renders the same six destinations twice — desktop row and off-canvas panel', () => {
    render(<App />)

    const row = screen.getByRole('navigation', { name: 'Main' })
    const drawer = screen.queryByRole('dialog', { name: 'Site menu' })

    expect(Array.from(row.querySelectorAll('a')).map((link) => link.textContent)).toEqual([
      'Home',
      'Portfolio',
      'About',
      'Services',
      'Blog',
      'Contact',
    ])
    expect(drawer).toBeNull()
  })

  it('labels every icon-only control and credits Component Dock exactly once', () => {
    const { container } = render(<App />)

    expect(screen.getByRole('button', { name: 'Open the menu' })).toHaveAttribute(
      'aria-controls',
      'mobile-menu',
    )
    expect(container.querySelectorAll('[aria-expanded]')).toHaveLength(1)
    expect(container.querySelectorAll('[aria-haspopup]')).toHaveLength(0)
    expect(container.querySelectorAll('[aria-current="page"]')).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)
    expect(container.textContent).toContain(String(new Date().getFullYear()))
  })

  it('ships only seeded placeholder imagery, Tailwind utilities and no provenance strings', () => {
    const { container } = render(<App />)

    const images = Array.from(container.querySelectorAll('img'))
    expect(images.length).toBeGreaterThan(0)
    for (const image of images) {
      expect(image.getAttribute('src')).toMatch(/^https:\/\/picsum\.photos\/seed\/slidenav-/)
    }

    expect(
      Array.from(container.querySelectorAll('[class]')).every((el) => !/\bcl-/.test(el.className)),
    ).toBe(true)

    const markup = container.innerHTML
    expect(markup).not.toMatch(/colorlib/i)
    expect(markup).not.toMatch(/website.menu/i)
    expect(markup).not.toMatch(/\bBrand\b/)
    expect(markup).not.toMatch(/icomoon|arrow-collapse|has-children/)
  })
})

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders one band as the only section', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]!.querySelectorAll('article')).toHaveLength(4)
  })

  it('exposes one h1, four card h2s and one header block', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4)
    expect(document.querySelectorAll('header')).toHaveLength(1)
  })

  it('invents no navigation, filter row, search field, map or button', () => {
    render(<App />)

    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
    expect(screen.queryByRole('searchbox')).toBeNull()
    expect(screen.queryByRole('combobox')).toBeNull()
    expect(document.querySelectorAll('form, input, select, textarea, iframe, svg')).toHaveLength(0)
  })

  it('carries exactly five links: four card titles and the Component Dock credit', () => {
    render(<App />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(5)
    expect(links.slice(0, 4).map((link) => link.textContent)).toEqual([
      'Lakes and larches',
      'Neon after dark',
      'Above the clouds',
      'Chasing the lights',
    ])
    expect(links[4]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('paints the near-black ground and the bone-white ink', () => {
    const { container } = render(<App />)

    const shell = container.firstElementChild as HTMLElement
    expect(shell.className).toContain('bg-ground')
    expect(shell.className).toContain('text-ink')
    expect(shell.className).toContain('font-sans')
  })

  it('centres a 1312px shell so the grid itself is 1280px wide', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main.className).toContain('mx-auto')
    expect(main.className).toContain('max-w-[1312px]')
    expect(main.className).toContain('px-4')
    expect(main.className).toContain('py-[clamp(36px,6vw,72px)]')
  })

  it('keeps the attribution below the band, not inside it', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo')
    expect(main.contains(footer)).toBe(false)
    expect(main.firstElementChild!.tagName).toBe('HEADER')
  })
})

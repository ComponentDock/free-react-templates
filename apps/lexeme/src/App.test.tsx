import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders one band as the only section', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]!.querySelectorAll('li')).toHaveLength(4)
  })

  it('paints the lavender ground and the dark ink', () => {
    const { container } = render(<App />)

    const shell = container.firstElementChild as HTMLElement
    expect(shell.className).toContain('bg-ground')
    expect(shell.className).toContain('text-ink')
    expect(shell.className).toContain('font-sans')
  })

  it('centres a 1232px shell so the grid itself is 1200px wide', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main.className).toContain('mx-auto')
    expect(main.className).toContain('max-w-[1232px]')
    expect(main.className).toContain('px-4')
    expect(main.className).toContain('py-[clamp(36px,6vw,72px)]')
  })

  it('keeps the attribution outside the band', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo')
    expect(main.contains(footer)).toBe(false)
    expect(main.firstElementChild!.tagName).toBe('HEADER')
  })

  it('invents no navigation, search, filter or extra control', () => {
    render(<App />)

    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('searchbox')).toBeNull()
    expect(screen.queryByRole('combobox')).toBeNull()
    expect(document.querySelectorAll('form, input, select, textarea, img, iframe')).toHaveLength(0)
    expect(screen.getAllByRole('button')).toHaveLength(4)
  })

  it('carries exactly one link: the Component Dock credit', () => {
    render(<App />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('exposes one h1 and no second-level headings — the card words are copy', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.queryAllByRole('heading', { level: 2 })).toHaveLength(0)
  })
})

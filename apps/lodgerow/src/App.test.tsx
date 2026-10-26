import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders one listing band as the only section', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]!.querySelectorAll('article')).toHaveLength(3)
  })

  it('exposes one h1, three h2 titles and one header block', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
    expect(document.querySelectorAll('header')).toHaveLength(1)
  })

  it('invents no navigation, filter bar, map, form or button', () => {
    render(<App />)

    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
    expect(screen.queryByRole('searchbox')).toBeNull()
    expect(screen.queryByRole('combobox')).toBeNull()
    expect(screen.queryByRole('textbox')).toBeNull()
    expect(document.querySelectorAll('form, input, select, textarea, iframe')).toHaveLength(0)
  })

  it('has exactly four anchors: three stay titles and the Component Dock credit', () => {
    render(<App />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
    expect(links[3]).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(
      screen.getAllByRole('link').filter((link) => link.getAttribute('href') === '#'),
    ).toHaveLength(3)
  })

  it('paints the cool mint ground and the green-black ink', () => {
    const { container } = render(<App />)

    const shell = container.firstElementChild as HTMLElement
    expect(shell.className).toContain('bg-ground')
    expect(shell.className).toContain('text-ink')
    expect(shell.className).toContain('font-sans')
  })

  it('centres a 952px band so the content column is 920px wide', () => {
    render(<App />)

    const main = screen.getByRole('main')
    expect(main.className).toContain('mx-auto')
    expect(main.className).toContain('max-w-[952px]')
    expect(main.className).toContain('px-4')
  })

  it('keeps the attribution below the band, not inside it', () => {
    render(<App />)

    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo')
    expect(main.contains(footer)).toBe(false)
    expect(main.firstElementChild!.tagName).toBe('HEADER')
  })
})

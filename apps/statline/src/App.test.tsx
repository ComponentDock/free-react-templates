import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the single metric band as the only section', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]!.querySelector('ul')).not.toBeNull()
  })

  it('exposes one h1 and four h2 headings in grid order', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    const labels = screen.getAllByRole('heading', { level: 2 }).map((h) => h.textContent)
    expect(labels).toEqual(['Net revenue', 'Orders', 'Conversion rate', 'Refund rate'])
  })

  it('invents no navigation, button, form or image element', () => {
    render(<App />)

    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('button')).toBeNull()
    expect(screen.queryByRole('textbox')).toBeNull()
    expect(document.querySelector('img')).toBeNull()
    expect(document.querySelector('canvas')).toBeNull()
  })

  it('has exactly one link: the Component Dock credit', () => {
    render(<App />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('paints the cool grey ground and the slate ink', () => {
    const { container } = render(<App />)

    const shell = container.firstElementChild as HTMLElement
    expect(shell.className).toContain('bg-ground')
    expect(shell.className).toContain('text-ink')
  })
})

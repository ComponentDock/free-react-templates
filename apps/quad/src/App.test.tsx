import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Quad — Education Template')
  })

  it('composes the header, all sections in main, and the footer contentinfo', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Quad/ })).toBeInTheDocument()

    const main = screen.getByRole('main')
    const h1 = within(main).getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/One Step Ahead This Season/)

    const h2s = within(main)
      .getAllByRole('heading', { level: 2 })
      .map((h) => h.textContent ?? '')
    expect(h2s.join(' ')).toMatch(/Awesome Feature/)
    expect(h2s.join(' ')).toMatch(/Our Popular Courses/)
    expect(h2s.join(' ')).toMatch(/Register Now/)
    expect(h2s.join(' ')).toMatch(/Our Expert Trainers/)
    expect(h2s.join(' ')).toMatch(/Upcoming Events/)
    expect(h2s.join(' ')).toMatch(/Client say about me/)

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Top Products' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

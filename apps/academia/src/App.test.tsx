import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Academia — Online Education Template')
  })

  it('composes the navbar banner, all sections in main, and the footer contentinfo', () => {
    render(<App />)

    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: /Academia/ })).toBeInTheDocument()

    const main = screen.getByRole('main')
    const h1 = within(main).getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/Learn your\s*Favorite Course\s*From Online/)

    const h2s = within(main)
      .getAllByRole('heading', { level: 2 })
      .map((h) => h.textContent ?? '')
    expect(h2s.join(' ')).toMatch(/Over 7000 Tutorials\s*from 20 Courses/)
    expect(h2s.join(' ')).toMatch(/Popular Courses/)
    expect(h2s.join(' ')).toMatch(/Our Course Speciality/)
    expect(h2s.join(' ')).toMatch(/Subscribe Newsletter/)
    expect(h2s.join(' ')).toMatch(/Our Latest Blog/)
    expect(within(main).getByText(/humanitarian aid agencies/)).toBeInTheDocument()
    expect(within(main).getByRole('link', { name: 'More Courses' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
    expect(within(contentinfo).getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

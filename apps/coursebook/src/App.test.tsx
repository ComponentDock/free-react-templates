import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders one container holding the head, the grid and the attribution line', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)

    const main = mains[0]!
    expect(main.className).toContain('mx-auto')
    expect(main.className).toContain('max-w-[1192px]')
    expect(main.className).toContain('px-4')
    expect(main.className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(main.className).not.toContain('min-h')

    expect([...main.children].map((child) => child.tagName)).toEqual(['HEADER', 'DIV', 'FOOTER'])
  })

  it('lays the three cards on the arithmetic auto-fit grid with a 22 px gutter', () => {
    render(<App />)

    const grid = screen.getByRole('main').children[1]!
    expect(grid.className).toContain('grid')
    expect(grid.className).toContain('grid-cols-[repeat(auto-fit,minmax(290px,1fr))]')
    expect(grid.className).toContain('gap-[22px]')
    expect(grid.className).not.toMatch(/(sm|md|lg|xl):/)
    expect(grid.children).toHaveLength(3)
    ;[...grid.children].forEach((card) => expect(card.tagName).toBe('ARTICLE'))
  })

  it('walks one h1, three h2 and three progress bars in card order', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(3)
    expect(screen.getAllByRole('article')).toHaveLength(3)

    expect(
      screen.getAllByRole('progressbar').map((bar) => bar.getAttribute('aria-valuenow')),
    ).toEqual(['58', '17', '100'])
    expect(screen.getAllByText(/^\d+ lessons$/).map((node) => node.textContent)).toEqual([
      '24 lessons',
      '18 lessons',
      '12 lessons',
    ])
  })

  it('gives every card link a real in-page destination instead of a dead anchor', () => {
    render(<App />)

    const cardLinks = screen
      .getAllByRole('link')
      .filter((link) => link.getAttribute('href')?.startsWith('#course-'))
    expect(cardLinks.map((link) => link.getAttribute('href'))).toEqual([
      '#course-1',
      '#course-2',
      '#course-3',
    ])

    cardLinks.forEach((link) => {
      const id = link.getAttribute('href')!.slice(1)
      expect(document.getElementById(id)).not.toBeNull()
    })

    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)
    expect(document.querySelectorAll('form, input, button')).toHaveLength(0)
  })

  it('credits Component Dock in the footer with no other external link', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer.textContent).toContain('More templates at')
    expect(footer.textContent).toContain('Component Dock')

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('ships the three card states: two in progress and one finished', () => {
    render(<App />)

    expect(screen.getAllByText('Resume')).toHaveLength(2)
    expect(screen.getAllByText('View')).toHaveLength(1)
    expect(screen.getByText('Certificate ready')).toBeInTheDocument()
    expect(screen.getAllByText('Intermediate')).toHaveLength(1)
    expect(screen.getAllByText('Beginner')).toHaveLength(1)
    expect(screen.getAllByText('All levels')).toHaveLength(1)
  })
})

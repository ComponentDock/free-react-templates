import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Hoodly — Local Directory')
  })

  it('composes the page with proper landmarks', () => {
    render(<App />)
    const header = screen.getByRole('banner')
    expect(within(header).getByRole('link', { name: /HOODLY/ })).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders every section in the reference order', () => {
    render(<App />)
    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Top trending for your city',
      'How it works',
      'Get the App now!',
    ])

    const hero = within(main).getByRole('heading', { level: 1 })
    expect(hero.textContent).toBe('New York')
  })
})

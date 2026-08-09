import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in order and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Airwave — Podcast')

    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Building a $100M Company with No Funding',
      'Recent Episodes',
      'Meet Your Host',
      'Proudly Supported By',
      'What Listeners Say',
      'Never Miss an Episode',
      'Frequently Asked Questions',
      'Let’s Connect',
    ])

    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(
      /Stories That Inspire Action/,
    )
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
  })
})

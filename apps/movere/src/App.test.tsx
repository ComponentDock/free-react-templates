import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in order and sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Movere — Moving Company Template')

    const main = screen.getByRole('main')
    const headings = within(main).getAllByRole('heading', { level: 2 })
    expect(headings.map((heading) => heading.textContent)).toEqual([
      'Moving Solutions for Every Need',
      'Your Move in 4 Easy Steps',
      'We Move You Anywhere',
      'Transparent, Honest Pricing',
      'Trusted by Thousands of Families',
      'Get Your Free Moving Quote',
      'Frequently Asked Questions',
      'Ready to Make Your Move?',
    ])

    expect(within(main).getByRole('heading', { level: 1 }).textContent).toMatch(/Moving Made/)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
  })
})

import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title and renders every section in order', () => {
    render(<App />)

    expect(document.title).toBe('Equity — Investment Consulting Template')

    const main = screen.getByRole('main')
    const headings = within(main)
      .getAllByRole('heading', { level: 2 })
      .map((h) => h.textContent)
    expect(headings).toEqual([
      'Our Investors',
      'Welcome to Equity',
      'Our Services',
      'Our Leadership',
      'Press Releases',
      'Testimonial',
      'Our Blog',
      'Contact Us',
    ])

    expect(screen.getByRole('navigation', { name: /main/i })).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(within(main).getByRole('heading', { level: 1 })).toHaveTextContent(
      'Investing for Success',
    )

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})

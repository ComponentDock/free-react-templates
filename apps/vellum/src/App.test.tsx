import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { heroHeadline, siteName, skipLabel } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Vellum — Blog Template')
  })

  it('renders a skip link as the first interactive element', () => {
    render(<App />)
    const skip = screen.getByRole('link', { name: skipLabel })
    expect(skip).toHaveAttribute('href', '#main')
  })

  it('composes the navbar in the banner, sections in main, and the footer in contentinfo', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByRole('link', { name: `${siteName}.` })).toBeInTheDocument()

    const main = screen.getByRole('main')
    expect(within(main).getByRole('heading', { name: heroHeadline })).toBeInTheDocument()
    expect(within(main).getByRole('region', { name: 'Blog' })).toBeInTheDocument()
    expect(within(main).getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()

    const contentinfo = screen.getByRole('contentinfo')
    expect(within(contentinfo).getByRole('link', { name: `${siteName}.` })).toBeInTheDocument()
  })

  it('renders the sections in the reference order: hero, blog list, pagination', () => {
    const { container } = render(<App />)
    const main = container.querySelector('main')
    const order = Array.from(main!.querySelectorAll('section, nav')).map((el) =>
      el.getAttribute('aria-label'),
    )
    expect(order).toEqual(['Welcome', 'Blog', 'Pagination'])
  })
})

import { describe, expect, it } from 'vitest'
import { render, within } from '@testing-library/react'
import { App } from './App'
import { navLinks } from './data'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Newswire — News Template')
  })

  it('composes the banner, main and footer landmarks', () => {
    const { container } = render(<App />)

    const banner = container.querySelector('header')!
    expect(banner).toBeInTheDocument()
    expect(banner.className).toContain('sticky')
    expect(within(banner).getByRole('link', { name: 'Newswire' })).toBeInTheDocument()
    expect(within(banner).getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
    for (const link of navLinks) {
      expect(within(banner).getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }

    const main = container.querySelector('main')!
    expect(main).toBeInTheDocument()
    for (const heading of [
      "Editor's Pick",
      'Trending',
      'Politics',
      'Business',
      'Recent News',
      'Popular Posts',
      'Newsletter Subscribe',
    ]) {
      expect(within(main).getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    expect(within(main).getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()

    const footer = container.querySelector('footer')!
    expect(footer).toBeInTheDocument()
    expect(within(footer).getByText(/Copyright ©/)).toBeInTheDocument()
  })
})

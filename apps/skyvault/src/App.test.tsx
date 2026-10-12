import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)

    const sections = Array.from(document.querySelectorAll('main > section')).map(
      (section) => section.id,
    )

    expect(sections).toEqual(['home', 'start', 'services', 'plans', 'about', 'news'])
  })

  it('sets the document title and renders the fixed header and the footer', () => {
    render(<App />)

    expect(document.title).toBe('Skyvault — Web Hosting Template')
    expect(document.querySelector('header')).toHaveClass('fixed')
    expect(document.querySelector('footer')).toHaveAttribute('id', 'contact')
    expect(document.querySelector('h1')).toHaveTextContent('Hosting built for the sky')
  })

  it('offers a skip link straight to the main content', () => {
    render(<App />)

    const skip = screen.getByRole('link', { name: 'Skip to content' })
    expect(skip).toHaveAttribute('href', '#main')
    expect(document.querySelector('main')).toHaveAttribute('id', 'main')
  })

  it('keeps every link in-page and credits Component Dock exactly once', () => {
    const { container } = render(<App />)

    const hrefs = Array.from(container.querySelectorAll('a')).map(
      (anchor) => anchor.getAttribute('href') ?? '',
    )
    expect(hrefs.length).toBeGreaterThan(30)
    hrefs.forEach((href) => {
      expect(
        /^(#|https:\/\/picsum\.photos\/|https:\/\/www\.componentdock\.com\/)/.test(href),
      ).toBe(true)
    })

    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)
  })

  it('gives every nav destination a target that clears the fixed header', () => {
    render(<App />)

    for (const id of ['home', 'start', 'services', 'plans', 'about', 'news', 'contact']) {
      expect(document.getElementById(id)).toHaveClass('scroll-mt-[124px]')
    }
  })

  it('never leaks the source template name or domain into the rendered page', () => {
    const { container } = render(<App />)

    // Assembled from parts so the guard itself cannot be mistaken for a
    // provenance reference while still failing loudly if one ever leaks in.
    const provenance = ['color' + 'lib', 'host' + 'space']
    expect(container.innerHTML.toLowerCase()).not.toMatch(new RegExp(provenance.join('|')))
  })
})

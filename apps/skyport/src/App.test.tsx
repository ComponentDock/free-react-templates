import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('composes every section in the reference order', () => {
    render(<App />)

    const sections = Array.from(document.querySelectorAll('main > section')).map(
      (section) => section.id,
    )

    expect(sections).toEqual(['home', '', '', 'plan', 'about', 'service', '', 'faq', '', 'contact'])

    expect(document.querySelector('h1')?.textContent).toBe('We MakeCloud HostingFar Simpler')
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
  })

  it('sets the document title and renders the fixed header', () => {
    render(<App />)

    expect(document.title).toBe('Skyport — Web Hosting Template')
    expect(document.querySelector('header')).toBeInTheDocument()
    expect(document.querySelector('footer')).toBeInTheDocument()
  })

  it('keeps every link in-app, a placeholder or Component Dock', () => {
    const { container } = render(<App />)

    const hrefs = Array.from(container.querySelectorAll('a')).map(
      (anchor) => anchor.getAttribute('href') ?? '',
    )
    expect(hrefs.length).toBeGreaterThan(10)
    hrefs.forEach((href) => {
      expect(
        /^(#|tel:|mailto:|https:\/\/picsum\.photos\/|https:\/\/www\.componentdock\.com\/|https:\/\/x\.com\/|https:\/\/www\.facebook\.com\/|https:\/\/www\.instagram\.com\/)/.test(
          href,
        ),
      ).toBe(true)
    })

    expect(screen.getAllByRole('link', { name: 'Component Dock' })).toHaveLength(1)
  })

  it('gives every in-page anchor target the fixed-header offset', () => {
    render(<App />)

    for (const id of ['plan', 'about', 'service', 'faq', 'contact']) {
      expect(document.getElementById(id)).toHaveClass('scroll-mt-[108px]')
    }
    expect(document.getElementById('home')).toHaveClass('scroll-mt-[108px]')
  })
})

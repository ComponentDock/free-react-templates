import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from '../App'
import { site } from '../content'
import { installMedia } from './helpers'

describe('App', () => {
  it('lays out the nine bands in the reference order', () => {
    installMedia({ reduce: false })
    render(<App />)

    expect(document.querySelector('header')).not.toBeNull()
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
    expect(document.querySelector('footer')).not.toBeNull()

    const ids = Array.from(document.querySelectorAll('section[id]')).map(
      (section) => section.id,
    )
    expect(ids).toEqual(['works', 'statement', 'exhibitions', 'acquire', 'faq', 'contact'])

    const headings = screen
      .getAllByRole('heading', { level: 2 })
      .map((heading) => heading.textContent)
    expect(headings).toEqual([
      'Recent paintings',
      'On painting rooms nobody is looking at',
      'Where the work has been',
      'Three ways to buy',
      'Before you write',
      'Three works are currently available',
      'The work',
      'Studio',
      'Enquiries',
      'Stay updated',
    ])
  })

  it('has exactly one h1, and it is the page promise', () => {
    installMedia({ reduce: false })
    render(<App />)

    const headings = screen.getAllByRole('heading', { level: 1 })
    expect(headings).toHaveLength(1)
    expect(headings[0]).toHaveAccessibleName('Painting the hour before the light goes')
  })

  it('sends every in-page anchor somewhere that exists', () => {
    installMedia({ reduce: false })
    render(<App />)

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'))
    expect(anchors.length).toBeGreaterThan(10)

    anchors.forEach((anchor) => {
      const target = (anchor.getAttribute('href') ?? '').slice(1)
      expect(target.length).toBeGreaterThan(0)
      expect(document.getElementById(target)).not.toBeNull()
    })
  })

  it('credits Component Dock in the footer', () => {
    installMedia({ reduce: false })
    render(<App />)

    const dock = Array.from(document.querySelectorAll('a')).filter(
      (anchor) => anchor.getAttribute('href') === site.componentDock,
    )
    expect(dock.length).toBeGreaterThanOrEqual(2)
    dock.forEach((anchor) => expect(anchor).toHaveAttribute('rel', 'noopener'))
  })

  it('mounts the chrome: skip link, progress bar, back-to-top and the mobile bar', () => {
    installMedia({ reduce: false })
    render(<App />)

    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument()
    expect(screen.getByTestId('scroll-progress')).toBeInTheDocument()
    expect(screen.getByTestId('back-to-top')).toBeInTheDocument()
    expect(screen.getByTestId('mobile-bar')).toBeInTheDocument()
    expect(screen.getByTestId('cookie-strip')).toBeInTheDocument()
  })
})

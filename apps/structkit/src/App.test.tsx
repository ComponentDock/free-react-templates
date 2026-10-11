import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { App } from './App'

/** The source brand must never surface in the app; provenance lives in the spec. */
const SOURCE_BRAND = new RegExp(['color', 'lib'].join(''), 'i')

afterEach(() => {
  Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
})

describe('App', () => {
  it('renders every section in the reference order', () => {
    render(<App />)

    const ids = [
      'home',
      'buttons',
      'inputs',
      'checkRadios',
      'menus',
      'navigations',
      'navigationTabs',
      'notifications',
      'typography',
      'images',
      'javascriptsComponents',
      'carousel',
      'cards',
    ]
    for (const id of ids) {
      expect(document.getElementById(id)).not.toBeNull()
    }

    expect(screen.getByRole('heading', { level: 1, name: 'Basic Elements' })).toBeInTheDocument()
    expect(document.querySelectorAll('section').length).toBeGreaterThanOrEqual(16)
  })

  it('sets the document title', () => {
    render(<App />)

    expect(document.title).toBe('Structkit — Free UI Kit Showcase')
  })

  it('credits Component Dock in the footer and never the source', () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(document.body.textContent ?? '').not.toMatch(SOURCE_BRAND)
    expect(document.body.textContent ?? '').not.toMatch(/structure free ui kit/i)
  })

  it('switches the navbar to the fixed white bar on scroll', () => {
    render(<App />)

    const nav = document.querySelector('nav')
    expect(nav).not.toBeNull()
    expect(nav).toHaveClass('absolute')

    Object.defineProperty(window, 'scrollY', { value: 300, writable: true })
    fireEvent.scroll(window)

    expect(nav).toHaveClass('fixed', 'bg-white')
  })
})

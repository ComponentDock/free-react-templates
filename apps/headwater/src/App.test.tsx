import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'
import { COMPONENTDOCK_HREF } from './content'

describe('App', () => {
  it('renders one h1, one main, one header and one footer', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(document.querySelectorAll('main')).toHaveLength(1)
    expect(document.querySelectorAll('header')).toHaveLength(1)
    expect(document.querySelectorAll('footer')).toHaveLength(1)
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content')
  })

  it('orders the bands as designed', () => {
    render(<App />)
    const ids = Array.from(document.querySelectorAll('main > section')).map(
      (section) => section.id,
    )
    expect(ids).toEqual(['', 'quiz', 'products', 'why-us', 'service', 'testimonials', 'contact'])
    const sections = Array.from(document.querySelectorAll('main > section'))
    expect(sections[0]!.className).toContain('bg-sand-100')
  })

  it('asks for no form and no input — the quiz is the qualifying device', () => {
    render(<App />)
    expect(document.querySelectorAll('form')).toHaveLength(0)
    expect(document.querySelectorAll('input, textarea, select')).toHaveLength(0)
  })

  it('has no dead anchors', () => {
    render(<App />)
    const hrefs = Array.from(document.querySelectorAll('a[href]')).map((a) =>
      a.getAttribute('href'),
    )
    expect(hrefs).not.toContain('#')
    expect(hrefs.some((href) => href?.includes('service-areas'))).toBe(false)
  })

  it('links Component Dock from the footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      COMPONENTDOCK_HREF,
    )
  })
})
